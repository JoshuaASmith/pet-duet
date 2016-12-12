const React = require('react')
const {Link} = require('react-router')

const Footer = React.createClass({
    render() {
        return (
            <footer className="bg-black-80 pv3 tc center" style={{
                boxSizing: 'border-box',
                fontSize: 19,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: '"Avenir Next", sans-serif'
            }}>
                <Link className="link no-underline" to="/">
                    <p className=" link f9 fw1 no-underline black hover-dark-blue white">Home</p>
                </Link>
            </footer>
        )
    }
})

module.exports = Footer
