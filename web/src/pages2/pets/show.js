const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()

const ShowPet = React.createClass({
    getInitialState() {
        return {pet: {}, removed: false}
    },
    componentDidMount() {
        data.get('pets', this.props.params._id).then(pet => {
            this.setState({pet})
            console.log(pet)
        })
    },
    handleRemove(e) {
        e.preventDefault()
    },
    render() {
        return (
            <div>
                {this.state.removed
                    ? <Redirect to="/pets"/>
                    : null}
                <h1>Showing Pet</h1>
                <h3>{this.state.pet.petName}</h3>
                <button className="f6 fw1 link dim br2 ba ph3 pv2 mt3 mb2 db black center">
                    <Link className="no-underline black hover-bg-moon-gray mb2" to={`/pets/${this.state.pet._id}/edit`}>Edit Pet Record</Link>
                </button>
                <button onClick={this.handleRemove}>Remove Pet</button>
                <Link to="/pets">Return</Link>
            </div>
        )
    }
})

module.exports = ShowPet
