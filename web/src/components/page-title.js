const React = require('react')

const PageTitle = React.createClass({
    render() {
        return (
            <div>
                <h2 className="avenir fw1 fw1-l tc" style={{
                    boxSizing: 'border-box',
                    fontSize: 50,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: '"Avenir Next", sans-serif'
                }}>{this.props.title}</h2>
            </div>
        )
    }
})

module.exports = PageTitle
