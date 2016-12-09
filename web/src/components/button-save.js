const React = require('react')

const ButtonComponent = React.createClass({
    render() {
        return (
            <div className="dim tc">
                <button className="f6 fw1 link dim br2 ba ph3 pv2 mt3 mb2 db black center">
                    {this.props.title}
                </button>
            </div>
        )
    }
})

module.exports = ButtonComponent
