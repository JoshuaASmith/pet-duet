// simple footer component
const React = require('react')
const {Link} = require('react-router')

const Footer = React.createClass({
    render() {
        return (
            <footer className="bg-black-80 pv3 tc center ttu f4 fw1 tracked-mega avenir bb">
                <Link className="link no-underline" to="/">
                    <p className=" link f9 fw1 no-underline black hover-dark-blue white">Home</p>
                </Link>
            </footer>
        )
    }
})

module.exports = Footer
