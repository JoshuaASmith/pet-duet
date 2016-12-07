const React = require('react')
const {Link} = require('react-router')
const data = require('../../utils/data')()

const Owners = React.createClass({
    getInitialState() {
        return {owners: []}
    },
    componentDidMount() {
        data.list('owners').then(obj => {
            this.setState({owners: obj.docs})
        })
    },
    render() {
        const li = owner => <li key={owner._id}>
            <Link to="/owners/:id/show">{owner.ownerFirstName}</Link>
        </li>
        return (
            <div>
                <ul>
                    {this.state.owners.map(li)}
                </ul>
                <Link to="/owners/new">
                    <button>New Owner</button>
                </Link>
            </div>
        )
    }
})

module.exports = Owners
