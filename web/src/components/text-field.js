// input field component- Props: label, type, value, onChange, placeholder, name (built on rebass)
const React = require('react')
const {Input} = require('rebass')

const TextField = React.createClass({
    render() {
        return (
            <div className="w-third tc center">
                <Input label={this.props.label} type={this.props.type} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} name=""/>
            </div>
        )
    }
})

module.exports = TextField
