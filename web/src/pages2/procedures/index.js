//index of procedures will be embedded in show of specific pets
//link to add new procedure that adds to pet
const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')

const Procedures = React.createClass({
    getInitialState() {
        return {procedures: []}
    },
    componentDidMount() {
        data.list('procedures').then(obj => {
            this.setState({procedures: obj.docs})
        })
    },
    render() {
        const li = procedure => <li key={procedure._id}>
            <Link to={`/procedures/${procedure._id}/show`}>{procedure.procedure}</Link>
        </li>
        return (
            <div>
                <h1>Procedure</h1>
                <ul>
                    {this.state.procedures.map(li)}
                </ul>
                <Link to="/procedures/new">
                    <button>New Procedure</button>
                </Link>
                <Link to="/">Home</Link>
            </div>
        )
    }
})

module.exports = Procedures
