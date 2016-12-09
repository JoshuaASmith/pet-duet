const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const ButtonComponent = require('../../components/button-save')
//const confirm = require('react-confirm2')

const ShowProcedure = React.createClass({
    getInitialState() {
        return {procedure: '', resolved: false}
    },
    componentDidMount() {
        data.get('procedures', this.props.params.id).then(procedure => {
            this.setState({procedure})
        })
    },
    handleRemove(e) {
        e.preventDefault()
        if (confirm('Are you sure?')) {
            data.remove('procedure', this.props.params.id, this.state.procedure).then(res => {
                this.setState({resolved: true})
            })
        }
    },
    render() {
        return (
            <div>
                {this.state.resolved
                    ? <Redirect to="/procedures"/>
                    : null}
                <h3 className="fw1 f2 tc">Procedure</h3>
                <hr className="w-50 tl b--dark-blue"/>
                <div className="tc">
                    <h3>{this.state.procedure._id}</h3>
                    <h3>{this.state.procedure.procedure}</h3>
                    <h3>{this.state.procedure.datePerformed}</h3>
                </div>
                <ButtonComponent title="Edit Procedure Record">
                    <Link to={`/procedures/${this.state.procedure._id}/edit`}></Link>
                </ButtonComponent>
                <a href="#" onClick={this.handleRemove}>Remove Procedure</a>
                <Link to="/procedures">Return</Link>
            </div>
        )
    }
})

module.exports = ShowProcedure
