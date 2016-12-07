const React = require('react')
const data = require('../../utils/data')()
const {Link, Redirect} = require('react-router')
const TextField = require('../../components/text-field')

const PetsForm = React.createClass({
    getInitialState() {
        return {
            pet: {
                petName: '',
                petDOB: '',
                petSpeciesBreed: '',
                petMarkings: '',
                petGender: '',
                petBreeder: '',
                petDateAcquired: '',
                ownerID: ''
            },
            resolved: false,
            owner: []
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
        data.post(('owners/' + this.state.owner.id + '/pets'), this.state.pet)
    },
    render() {
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h2>Add a pet</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Pet Name</label>
                        <input value={this.state.pet.petName} onChange={this.handleChange('petName')} placeholder="Name"/>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input value={this.state.pet.petDOB} onChange={this.handleChange('petDOB')} type="date"/>
                    </div>
                    <TextField label="Species and Breed" value={this.state.pet.petSpeciesBreed} onChange={this.handleChange('petSpeciesBreed')}/>
                    <TextField label="Identifiable Markings" value={this.state.pet.petMarkings} onChange={this.handleChange('petMarkings')}/>
                    <TextField label="Gender" value={this.state.pet.petGender} onChange={this.handleChange('petGender')}/>
                    <TextField label="Breeder" value={this.state.pet.petBreeder} onChange={this.handleChange('petBreeder')}/>
                    <TextField label="Date Acquired" value={this.state.pet.petDateAcquired} onChange={this.handleChange('petDateAcquired')}/>
                    <TextField label="OwnerID" value={this.state.pet.ownerID} onChange={this.handleChange('ownerID')}/>
                    <button>Submit</button>
                </form>
                <Link to="/owners">Return</Link>
            </div>
        )
    }
})

module.exports = PetsForm
