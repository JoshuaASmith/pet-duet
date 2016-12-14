const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
//const confirm = require('react-confirm2')
const ButtonComponent = require('../../components/button-save')
const Procedures = require('../procedures')
const PetCard = require('./card')
const Footer = require('../../components/footer')
const PageTitle = require('../../components/page-title')

const ShowPet = React.createClass({
    getInitialState() {
        return {
            pet: {
                petName: '',
                ownerLastName: '',
                _id: ''
            },
            resolved: false,
            procedures: []
        }
    },
    componentDidMount() {
        data.get('pets', this.props.params.id).then(pet => {
            this.setState({pet})
        })
        data.list('procedures').then(procedures => console.log(procedures)).then(procedures => procedures.filter(procedure => procedure.parent_id === this.state.pet._id)).then(procedures => this.setState({procedures: procedures}))
    },
    handleRemove(e) {
        e.preventDefault()
        if (confirm('Are you sure?')) {
            data.remove('pets', this.props.params.id, this.state.pet).then(res => {
                this.setState({resolved: true})
            })
        }
    },
    render() {
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <PageTitle title={this.state.pet.petName + ' ' + this.state.pet.ownerLastName}/>
                <hr className="w-50 tl b--dark-blue"/>
                <PetCard pet={this.state.pet}/>
                <hr className="w-50 tl b--dark-blue"/>
                <div>
                    {this.state.pet._id
                        ? <Procedures petID={this.state.pet._id}/>
                        : null}
                </div>
                <div className="mb3">
                    <div className="center tc">
                        <Link className="link no underline" to={`/procedures/new?pet_id=${this.state.pet._id}&name=${this.state.pet.petName}`}>
                            <button className="f6 fw1 dim br2 ba ph3 pv2 mt3 mb2 tc center">
                                New Procedure
                            </button>
                        </Link>
                    </div>
                    <Link to={`/pets/${this.state.pet._id}/edit`}><ButtonComponent title="Edit Pet Record"/></Link>
                    <a className="" href="#" onClick={this.handleRemove}><ButtonComponent className="ph4" title="Remove Pet"/></a>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
})

module.exports = ShowPet
