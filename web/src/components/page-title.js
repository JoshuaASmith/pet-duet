const React = require('react')

const PageTitle = React.createClass({
    render() {
        return (
            <div>
                <h2 className="avenir fw6 f1 tc ttu tracked">{this.props.title}</h2>
            </div>
        )
    }
})

module.exports = PageTitle
