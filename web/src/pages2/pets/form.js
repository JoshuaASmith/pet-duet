const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')
const ButtonComponent = require('../../components/button-save')
const Footer = require('../../components/footer')
const Break = require('../../components/break')

const PetsForm = React.createClass({
    getInitialState() {
        return {
            pet: {
                petName: '',
                ownerLastName: '',
                ownerFirstName: '',
                ownerPhone: '',
                ownerEmail: '',
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
            <div>
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h2 className="avenir fw6 f1 tc ttu tracked">{formState + ' '}
                    Pet</h2>
                <Break/>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Pet Name" value={this.state.pet.petName} onChange={this.handleChange('petName')}/>
                    <TextField label="Owner Last Name" value={this.state.pet.ownerLastName} onChange={this.handleChange('ownerLastName')}/>
                    <TextField label="Owner First Name" value={this.state.pet.ownerFirstName} onChange={this.handleChange('ownerFirstName')} type="text"/>
                    <TextField label="Owner Phone Number" value={this.state.pet.ownerPhone} onChange={this.handleChange('ownerPhone')} type="text"/>
                    <TextField label="Owner Email Address" value={this.state.pet.ownerEmail} onChange={this.handleChange('ownerEmail')} type="email"/>
                    <TextField label="Pet Date of Birth" value={this.state.pet.petDOB} onChange={this.handleChange('petDOB')} type="date"/>
                    <TextField label="Species/Breed" value={this.state.pet.petSpeciesBreed} onChange={this.handleChange('petSpeciesBreed')}/>
                    <TextField label="Pet Gender" value={this.state.pet.petGender} onChange={this.handleChange('petGender')} type="text"/>
                    <TextField label="Special Markings" value={this.state.pet.petMarkings} onChange={this.handleChange('petMarkings')}/>
                    <TextField label="Date Acquired" value={this.state.pet.petDateAcquired} onChange={this.handleChange('petDateAcquired')} type="date"/>
                    <div className="tc center pa3">
                        <label>Pet Image</label>
                        <input type="file" onChange={this.handleUpload}/>
                        <div className="pa3">
                            <img className="b--black h5 w5" src={this.state.pet.file} role="presentation"/>
                        </div>
                    </div>
                    <div className="mb3">
                        <ButtonComponent title="Save"/>
                    </div>
                    <Break/>
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
