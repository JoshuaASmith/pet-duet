// category dropdown
//name
//date
//associated pet
//this is a record/history of a procdure

const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')
const ButtonComponent = require('../../components/button-save')
const Footer = require('../../components/footer')

const ProceduresForm = React.createClass({
    getInitialState() {
        return {
            procedure: {
                procedure: '',
                typeofProcedure: '',
                datePerformed: '',
                category: {
                    _id: -1
                }
            },
            categories: [],
            resolved: false,
            //parent_id: this.props.location.query.pet_id
        }
    },
    componentDidMount() {
        data.list('categories').then(categories => this.setState({categories: categories.docs}))
        if (this.props.params.id) {
            data.get('procedures', this.props.params.id).then(procedure => {
                this.setState({procedure})
            })
        }
    },
    handleChange(field) {
        return (e) => {
            let procedure = {
                ...this.state.procedure
            }
            procedure[field] = e.target.value
            this.setState({procedure})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.procedure._id) {
            data.put('procedures', this.state.procedure._id, this.state.procedure).then(procedure => {
                this.setState({resolved: true})
            })
        } else {
            data.post('procedures', this.state.procedure).then(res => {
                this.setState({resolved: true})
            }).catch(err => console.log(err))
        }
    },
    handleSelect(e) {
        const procedure = {
            ...this.state.procedure
        }
        const categories = [...this.state.categories]
        procedure.category = categories.filter(category => {
            return category.id === parseInt(e.target.value, 10)
        })
        this.setState({categories})
    },
    render() {
        const formState = this.state.procedure._id
            ? 'Edit'
            : 'New'
        return (
            <div className="pa2">
                {this.state.resolved
                    ? <Redirect to="/procedures"/>
                    : null}
                <h1 className="f1 fw1">{formState + ' '}
                    Procedure</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Procedure" value={this.state.procedure.procedure} onChange={this.handleChange('procedure')}/>
                    <TextField label="Date of Procedure" value={this.state.procedure.datePerformed} onChange={this.handleChange('datePerformed')} type="date"/>
                    <TextField label="Pet" value={this.state.procedure.petName} onChange={this.handleChange('petName')}/>
                    <div>
                        <label>Procedure Category</label>
                        <select value={this.state.categories._id} onChange={this.handleSelect}>
                            <option value="-1">Select</option>
                            {this.state.categories.map(category => <option key={category._id} value={category._id}>{category.category}</option>)}
                        </select>
                    </div>
                    <div>
                        <ButtonComponent title="Save"/>
                    </div>

                </form>
                <Link to="/procedures">Return</Link>
                <Footer/>
            </div>
        )
    }
})

module.exports = ProceduresForm
