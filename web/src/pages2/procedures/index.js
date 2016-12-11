//index of procedures will be embedded in show of specific pets
//link to add new procedure that adds to pet
const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const ButtonComponent = require('../../components/button-save')
const PageTitle = require('../../components/page-title')

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
        const li = procedure => <li className="list" key={procedure._id}>
            <Link to={`/procedures/${procedure._id}/show`}>{procedure.procedure}</Link>
        </li>
        return (
            <div className="tc w-50 center mt4">
                <PageTitle title="Procedures"/>
                <ul className="list mr5 avenir f2">
                    {this.state.procedures.map(li)}
                </ul>
                <Link to="/procedures/new">
                    <ButtonComponent title="New Procedures"/>
                </Link>
                <Link to="/">
                    <ButtonComponent title="Home"/>
                </Link>
            </div>
        )
    }
})

module.exports = Procedures
