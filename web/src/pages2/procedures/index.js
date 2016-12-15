const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const PageTitle = require('../../components/page-title')
const Break = require('../../components/break')
const {filter, propEq} = require('ramda')

const Procedures = React.createClass({
    getInitialState() {
        return {procedures: [], filtered: []}
    },
    componentDidMount() {
        data.list('procedures').then(procedures => procedures = procedures.docs).then(filter(propEq('parent_id', this.props.petID))).then(procedures => {
            this.setState({procedures: procedures, filtered: procedures})
        })
    },
    filter(e) {
        this.setState({
            filtered: filter(procedure => procedure.procedure.indexOf(e.target.value) === 0, this.state.procedures)
        })
    },
    render() {
        const li = procedure => <li key={procedure._id} className="ph2 pv2 bb b--light-silver tc avenir black hover-light-red">
            <Link className="link black hover-light-red avenir grow" to={`/procedures/${procedure._id}/show?parent_id=${this.props.petID}`}>{procedure.procedure}
                , {procedure.datePerformed}</Link>
        </li>
        return (
            <div>
                <div className="tc w-50 center mt4">
                    <PageTitle title="Procedures"/>
                </div>
                <Break/>
                <div className="pv2">
                    <div className="mt3 w-25 center">
                        <input className="pa2 input-reset ba b--dark-blue bg-transparent hover-bg-black hover-white w-100 tc" type="text" name="pet-search" onChange={this.filter}/>
                    </div>
                    <div>
                        <ul className="list pl0 ml0 center mw6 ba b--light-silver br3 bg-light-gray black">
                            {this.state.filtered.map(li)}
                        </ul>
                    </div>
                </div>
                <Break/>
            </div>
        )
    }
})

module.exports = Procedures
