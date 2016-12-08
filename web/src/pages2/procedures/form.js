// category dropdown
//name
//date
//this is a record/history of a procdure

const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')

const ProceduresForm = React.createClass({
    getInitialState() {
        return {
            procedure: {
                procedure: '',
                typeofProcedure: '',
                datePerformed: ''
            },
            resolved: false
        }
    },
    handleChange(field) {
        return (e) => {
            let procedure = {
                ...this.state.procedure
            }
            procedure[field] = e.target.value
            this.setState({procedure})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        data.post('procedures', this.state.procedure).then(res => this.setState({resolved: true}))
    },
    render() {
        return (
            <div className="pa2">
                {this.state.resolved
                    ? <Redirect to="/procedures"/>
                    : null}
                <h1>New Procedure</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Procedure</label>
                        <input value={this.state.procedure.procedure} onChange={this.handleChange('procedure')}/>
                    </div>
                    <TextField label="Type of Procedure" value={this.state.procedure.typeofProcedure} onChange={this.handleChange('typeofProcedure')}/>
                    <TextField label="Date of Procedure" value={this.state.procedure.datePerformed} onChange={this.handleChange('datePerformed')} type="date"/>
                    <div>
                        <button>Submit</button>
                    </div>
                    <Link to="/procedures">Return</Link>
                </form>

            </div>
        )
    }
})

module.exports = ProceduresForm
