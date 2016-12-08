const React = require('react')
const {Link} = require('react-router')
const data = require('../../utils/data')()

const Pets = React.createClass({
    getInitialState() {
        return {pets: []}
    },
    componentDidMount() {
        data.list('pets').then(obj => {
            this.setState({pets: obj.docs})
        })
    },
    render() {
        const li = pet => <li key={pet._id}>
            <Link to={`/pets/${pet._id}/show`}>{pet.petName + ' ' + pet.ownerLastName}</Link>
        </li>
        return (
            <div>
                <ul>
                    {this.state.pets.map(li)}
                </ul>
                <Link to="/pets/new">
                    <button>New Pet</button>
                </Link>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        )
    }
})

module.exports = Pets
