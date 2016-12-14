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
                comments: '',
                category: {
                    _id: -1
                },
                pet: {},
                parent_id: ''
            },
            categories: [],
            pets: [],
            resolved: false,
            //parent_id: this.props.location.query.pet_id
        }
    },
    componentDidMount() {
        data.list('categories').then(categories => this.setState({categories: categories.docs}))
        data.list('pets').then(pets => this.setState({pets: pets.docs}))
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
    handlePetSelect(e) {
        const procedure = {
            ...this.state.procedure
        }
        const pets = [...this.state.pets]
        procedure.pet = pets.filter(pet => {
            return pet.id === parseInt(e.target.value, 10)
        })
        this.setState({pets})
    },
    render() {
        const formState = this.state.procedure._id
            ? 'Edit'
            : 'New'
        return (
            <div className="center tc">
                {this.state.resolved
                    ? <Redirect to="/procedures"/>
                    : null}
                <h2 className="avenir fw1 fw1-l tc" style={{
                    boxSizing: 'border-box',
                    fontSize: 50,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: '"Avenir Next", sans-serif'
                }}>{formState + ' '}
                    Procedure</h2>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Procedure" value={this.state.procedure.procedure} onChange={this.handleChange('procedure')}/>
                    <TextField label="Date of Procedure" value={this.state.procedure.datePerformed} onChange={this.handleChange('datePerformed')} type="date"/>
                    <div className="tc center">
                        <label className="f6 b db mb2">Comments</label>
                        <input value={this.state.procedure.comments} onChange={this.handleChange('comments')} className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 center" type="text"/>
                    </div>
                    <div className="ph3 pv4">
                        <label>Pet</label>
                        <select value={this.state.procedure.parent_id} onChange={this.handleSelect}>
                            <option value="-1">Select</option>
                            {this.state.pets.map(pet => <option key={pet._id} value={pet._id}>{pet._id}</option>)}
                        </select>
                    </div>
                    <div className="pa3">
                        <label>Procedure Category</label>
                        <select value={this.state.categories._id} onChange={this.handleSelect}>
                            <option value="-1">Select</option>
                            {this.state.categories.map(category => <option key={category._id} value={category._id}>{category.category}</option>)}
                        </select>
                    </div>
                    <div className="mb4">
                        <ButtonComponent title="Save"/>
                    </div>

                </form>
                <div className="mb4">
                    <Link to="/procedures">
                        <button className="f6 fw1 dim br2 ba ph3 pv2 mt3 mb2 black center link no-underline">
                            Return
                        </button>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = ProceduresForm
