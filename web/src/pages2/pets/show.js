const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
//const confirm = require('react-confirm2')
const ButtonComponent = require('../../components/button-save')
const Procedures = require('../procedures')
const PetCard = require('./card')

const ShowPet = React.createClass({
    getInitialState() {
        return {pet: {}, resolved: false, procedures: []}
    },
    componentDidMount() {
        data.get('pets', this.props.params.id).then(pet => {
            this.setState({pet})
        })
        data.list('procedures').then(procedures => procedures.filter(procedure => procedure.parent_id === this.state.pet.id)).then(procedures => this.setState({procedures}))
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
        const record = procedure => <tr key={procedure._id}>
            <td>{procedure.procedure}</td>
        </tr>
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/pets"/>
                    : null}
                <h3 className="fw1 f2 tc">Pet</h3>
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
                    <Link to="/pets"><ButtonComponent title="Return"/></Link>
                </div>
            </div>
        )
    }
})

module.exports = ShowPet
