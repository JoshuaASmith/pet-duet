const React = require('react')
const {Input} = require('rebass')

const TextField = React.createClass({
    render() {
        return (
            <div className="w-50">
                <Input label={this.props.label} type={this.props.type} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label} name=""/>
            </div>
        )
    }
})

module.exports = TextField
