const React = require('react')

const ButtonComponent = React.createClass({
    render() {
        return (
            <div className="dim tc link no-underline">
                <button className="f6 fw1 dim br2 ba ph3 pv2 mt3 mb2 black center link no-underline">
                    {this.props.title}
                </button>
            </div>
        )
    }
})

module.exports = ButtonComponent
