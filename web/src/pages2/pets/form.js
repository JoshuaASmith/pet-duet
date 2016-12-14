const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')
const ButtonComponent = require('../../components/button-save')
const Footer = require('../../components/footer')

const PetsForm = React.createClass({
    getInitialState() {
        return {
            pet: {
                petName: '',
                ownerLastName: '',
                ownerFirstName: '',
                petDOB: '',
                petSpeciesBreed: '',
                petMarkings: '',
                petGender: '',
                petBreeder: '',
                petDateAcquired: '',
                file: '',
                procedure: {
                    id: -1
                }
            },
            procedures: [],
            resolved: false
        }
    },
    componentDidMount() {
        data.list('procedures').then(procedures => this.setState({procedures: procedures.docs}))
        if (this.props.params.id) {
            data.get('pets', this.props.params.id).then(pet => {
                this.setState({pet})
            })
        }
    },
    handleChange(field) {
        return (e) => {
            let pet = {
                ...this.state.pet
            }
            pet[field] = e.target.value
            this.setState({pet})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.pet._id) {
            data.put('pets', this.state.pet._id, this.state.pet).then(pet => {
                this.setState({resolved: true})
            })
        } else {
            data.post('pets', this.state.pet).then(res => {
                this.setState({resolved: true})
            }).catch(err => console.log(err))
        }
    },
    handleSelect(e) {
        e.preventDefault()
        let pet = {
            ...this.state.pet
        }
        let procedures = {
            ...this.state.procedures
        }
        pet.procedure = procedures.filter(procedure => {
            return procedure.id === parseInt(e.target.value, 10)
        })
        this.setState({procedures})
    },
    handleUpload(e) {
        let pet = {
            ...this.state.pet
        }
        const reader = new window.FileReader()
        reader.addEventListener('load', () => {
            pet.file = reader.result
            this.setState({pet})
        }, false)
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
    },
    render() {
        const formState = this.state.pet._id
            ? 'Edit'
            : 'New'
        return (
            <div className="">
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h2 className="avenir fw1 fw1-l tc" style={{
                    boxSizing: 'border-box',
                    fontSize: 50,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: '"Avenir Next", sans-serif'
                }}>{formState + ' '}
                    Pet</h2>
                <hr className="w-50 tl b--dark-blue"/>

                <form onSubmit={this.handleSubmit}>
                    <TextField label="Pet Name" value={this.state.pet.petName} onChange={this.handleChange('petName')}/>
                    <TextField label="Owner Last Name" value={this.state.pet.ownerLastName} onChange={this.handleChange('ownerLastName')}/>
                    <TextField label="Owner First Name" value={this.state.pet.ownerFirstName} onChange={this.handleChange('ownerFirstName')} type="text"/>
                    <TextField label="Pet Date of Birth" value={this.state.pet.petDOB} onChange={this.handleChange('petDOB')} type="date"/>
                    <TextField label="Species/Breed" value={this.state.pet.petSpeciesBreed} onChange={this.handleChange('petSpeciesBreed')}/>
                    <TextField label="Special Markings" value={this.state.pet.petMarkings} onChange={this.handleChange('petMarkings')}/> {/* <div className="tc center pa3">
                        <label htmlFor="">Procedures</label>
                        <select value={this.state.procedures._id} onChange={this.handleSelect}>
                            <option value="-1">Select</option>
                            {this.state.procedures.map(procedure => <option key={procedure._id} value={procedure._id}>{procedure.procedure}</option>)}
                        </select>
                    </div> */}
                    <div className="tc center pa3">
                        <label>Pet Image</label>
                        <input type="file" onChange={this.handleUpload}/>
                        <div className="pa3">
                            <img className="b--black" src={this.state.pet.file} style={{
                                height: '200px',
                                width: '200px'
                            }} role="presentation"/>
                        </div>
                    </div>
                    <div>
                        <ButtonComponent title="Save"/>
                    </div>
                    <div className="mb3">
                        <Link to="/pets"><ButtonComponent title="Return"/></Link>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
})

module.exports = PetsForm
