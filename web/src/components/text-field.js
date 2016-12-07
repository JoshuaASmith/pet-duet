const React = require('react')

const TextField = React.createClass({
    render() {
        return (
            <div>
                <label className="db pt2">{this.props.label}</label>
                <input type={this.props.type} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.label}/>
            </div>
        )
    }
})

module.exports = TextField
