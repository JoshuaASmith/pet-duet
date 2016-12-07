const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')

const OwnersForm = React.createClass({
    getInitialState() {
        return {
            owner: {
                ownerFirstName: '',
                ownerLastName: '',
                ownerEmail: '',
                ownerPhone: '',
                ownerAddress: ''
            },
            resolved: false
        }
    },
    handleChange(field) {
        return (e) => {
            let owner = {
                ...this.state.owner
            }
            owner[field] = e.target.value
            this.setState({owner})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        data.post('owners', this.state.owner).then(res => this.setState({resolved: true}))
    },
    render() {
        return (
            <div className="pa2">
                {this.state.resolved
                    ? <Redirect to="/owners"/>
                    : null}
                <h1>New Owner</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input value={this.state.owner.firstName} onChange={this.handleChange('ownerFirstName')}/>
                    </div>
                    <TextField label="Last Name" value={this.state.owner.lastName} onChange={this.handleChange('ownerLastName')}/>
                    <TextField label="Email" value={this.state.owner.ownerEmail} onChange={this.handleChange('ownerEmail')} type="email"/>
                    <TextField label="Phone" value={this.state.owner.ownerPhone} onChange={this.handleChange('ownerPhone')}/>
                    <TextField label="Full Address" value={this.state.owner.ownerAddress} onChange={this.handleChange('ownerAddress')}/>

                    <div>
                        <button>Submit</button>
                    </div>
                    <Link to="/owners">Return</Link>
                </form>

            </div>
        )
    }
})

module.exports = OwnersForm
