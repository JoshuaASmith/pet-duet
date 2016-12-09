const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
//const confirm = require('react-confirm2')
const ButtonComponent = require('../../components/button-save')

const ShowPet = React.createClass({
    getInitialState() {
        return {pet: {}, resolved: false}
    },
    componentDidMount() {
        data.get('pets', this.props.params.id).then(pet => {
            this.setState({pet})
        })
        data.list('procedures').then(procedures => procedures.parent_id === this.state.pet.id).then(procedures => this.setState({procedures}))
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
                <div className="tc">
                    <h3>{this.state.pet._id}</h3>
                    <h3>{this.state.pet.petName}</h3>

                </div>
                <div>
                    {/* <tbody>
                        {this.state.procedures.map(record)}
                    </tbody> */}
                </div>
                <div className="">
                    <ButtonComponent title="Edit Pet Record">
                        <Link to={`/pets/${this.state.pet._id}/edit`}></Link>
                    </ButtonComponent>
                    <ButtonComponent title=" New  Procedure ">
                        <Link to="/procedures/new"></Link>
                    </ButtonComponent>
                    <ButtonComponent title="Remove Pet">
                        <a href="#" onClick={this.handleRemove}>Remove Pet</a>
                    </ButtonComponent>
                    <ButtonComponent title="Return">
                        <Link to="/pets">Return</Link>
                    </ButtonComponent>
                </div>
            </div>
        )
    }
})

module.exports = ShowPet
