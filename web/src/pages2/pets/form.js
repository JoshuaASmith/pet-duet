const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')

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
                petDateAcquired: ''
            },
            resolved: false
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
        data.post('pets', this.state.pet).then(res => this.setState({resolved: true}))
    },
    render() {
        return (
            <div className="pa2">
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h1>New Pet</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input value={this.state.pet.petName} onChange={this.handleChange('petName')}/>
                    </div>
                    <TextField label="Owner Last Name" value={this.state.pet.ownerLastName} onChange={this.handleChange('ownerLastName')}/>
                    <TextField label="Owner First Name" value={this.state.pet.ownerFirstName} onChange={this.handleChange('ownerFirstName')} type="text"/>
                    <TextField label="Pet Date of Birth" value={this.state.pet.petDOB} onChange={this.handleChange('petDOB')}/>
                    <TextField label="Species/Breed" value={this.state.pet.petSpeciesBreed} onChange={this.handleChange('petSpeciesBreed')}/>

                    <div>
                        <button>Submit</button>
                    </div>
                    <Link to="/pets">Return</Link>
                </form>

            </div>
        )
    }
})

module.exports = PetsForm
