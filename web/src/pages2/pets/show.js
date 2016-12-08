const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
//const confirm = require('react-confirm2')

const ShowPet = React.createClass({
    getInitialState() {
        return {pet: '', resolved: false}
    },
    componentDidMount() {
        data.get('pets', this.props.params.id).then(pet => {
            this.setState({pet})
        })
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
                <h3 className="fw1 f2 tc">Pet</h3>
                <hr className="w-50 tl b--dark-blue"/>
                <h3>{this.state.pet._id}</h3>
                <h3>{this.state.pet.petName}</h3>
                <button className="f6 fw1 link dim br2 ba ph3 pv2 mt3 mb2 db black center">
                    <Link className="no-underline black hover-bg-moon-gray mb2" to={`/pets/${this.state.pet._id}/edit`}>Edit Pet Record</Link>
                </button>
                <a href="#" onClick={this.handleRemove}>Remove Pet</a>
                <Link to="/pets">Return</Link>
            </div>
        )
    }
})

module.exports = ShowPet
