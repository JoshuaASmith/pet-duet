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
        return {pet: {}, resolved: false, procedures: []}
    },
    componentDidMount() {
        data.get('pets', this.props.params.id).then(pet => {
            this.setState({pet})
        })
        data.list('procedures').then(procedures => procedures.filter(procedure => procedure.parent_id === this.state.pet._id)).then(procedures => this.setState({procedures}))
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
                <div>
                    {this.state.pet._id
                        ? <Procedures petID={this.state.pet._id}/>
                        : null}
                </div>
                <div className="">
                    <Link to={`/pets/${this.state.pet._id}/edit`}><ButtonComponent title="Edit Pet Record"/></Link>
                    <Link to="/procedures/new"><ButtonComponent title="New Procedure"/></Link>
                    <a href="#" onClick={this.handleRemove}><ButtonComponent title="Remove Pet"/></a>
                    <Footer/>
                </div>
            </div>
        )
    }
})

module.exports = ShowPet
