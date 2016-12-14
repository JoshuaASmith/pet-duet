const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const PageTitle = require('../../components/page-title')
const {filter, propEq} = require('ramda')

const Procedures = React.createClass({
    getInitialState() {
        return {procedures: []}
    },
    componentDidMount() {
        data.list('procedures').then(procedures => {
            console.log('test', procedures)
            return procedures
        }).then(procedures => procedures = procedures.docs).then(filter(propEq('parent_id', this.props.petID))).then(procedures => {
            this.setState({procedures: procedures})
        })
    },
    render() {
        const li = procedure => <li key={procedure._id} className="ph3 pv2 bb b--light-silver tc avenir black hover-light-red">
            <Link className="link black grow" to={`/procedures/${procedure._id}/show?parent_id=${this.props.petID}`}>{procedure.procedure}
                , {procedure.datePerformed}</Link>
        </li>
        return (
            <div>
                <div className="tc w-50 center mt4">
                    <PageTitle title="Procedures"/>
                </div>
                <hr className="w-50 tl b--dark-blue"/>
                <div className="pt2">
                    <div>
                        <ul className="list pl0 ml0 center mw6 ba b--light-silver br3 bg-light-gray black">
                            {this.state.procedures.map(li)}
                        </ul>
                    </div>
                    <div className="center tc">
                        <Link className="link no underline" to="/procedures/new">
                            <button className="f6 fw1 dim br2 ba ph3 pv2 mt3 mb2 tc center">
                                New Procedure
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Procedures
