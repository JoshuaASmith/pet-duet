const React = require('react')
const {Link} = require('react-router')

const About = React.createClass({
    render() {
        return (
            <div>
                <h2>About</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
})

module.exports = About
