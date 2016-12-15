const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')
const ButtonComponent = require('../../components/button-save')
const Footer = require('../../components/footer')
const Break = require('../../components/break')

const ProceduresForm = React.createClass({
    getInitialState() {
        return {
            procedure: {
                procedure: '',
                typeofProcedure: '',
                datePerformed: '',
                comments: '',
                category: {
                    id: -1
                },
                pet: {},
                parent_id: this.props.location.query.pet_id
                    ? this.props.location.query.pet_id
                    : this.props.params
            },
            categories: [],
            pets: [],
            resolved: false,
            colors: []
        }
    },
    componentDidMount() {
        data.list('categories').then(categories => this.setState({categories: categories.docs}))
        data.get('pets', this.props.location.query.pet_id).then(res => this.setState({pet: res}))
        if (this.props.params.id) {
            data.get('procedures', this.props.params.id).then(procedure => {
                return procedure
            }).then(procedure => {
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
        procedure.category = categories.find(category => {
            return category._id === e.target.value
        })
        this.setState({procedure})
    },
    handlePetSelect(e) {
        const procedure = {
            ...this.state.procedure
        }
        const pets = [...this.state.pets]
        procedure.pet = pets.filter(pet => {
            return pet._id === e.target.value
        })
        this.setState({procedure})
    },
    render() {
        const formState = this.state.procedure._id
            ? 'Edit'
            : 'New'
        return (
            <div className="center tc">
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h2 className="avenir fw6 f1 tc ttu tracked">{formState + ' '}
                    Procedure</h2>
                <Break/>
                <form className="mt4" onSubmit={this.handleSubmit}>
                    <TextField label="Procedure" value={this.state.procedure.procedure} onChange={this.handleChange('procedure')}/>
                    <TextField label="Date of Procedure" value={this.state.procedure.datePerformed} onChange={this.handleChange('datePerformed')} type="date"/>
                    <TextField label="Pet" value={this.state.procedure.parent_id} onChange={this.handleChange('parent_id')}/>
                    <TextField label="Comments" value={this.state.procedure.comments} onChange={this.handleChange('comments')}/>
                    <div className="pa3 db">
                        <label className="db">Procedure Category</label>
                        <select value={this.state.procedure.category.id} onChange={this.handleSelect}>
                            <option value="-1">Select</option>
                            {this.state.categories.map(category => <option key={category._id} value={category._id}>{category.category}</option>)}
                        </select>
                    </div>
                    <div className="mb2">
                        <ButtonComponent title="Save"/>
                    </div>
                </form>
                <Break/>
                <div className="mb4">
                    <Link to="/pets"><ButtonComponent title="Return"/></Link>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = ProceduresForm
