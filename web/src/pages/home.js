const React = require('react')
// const {Link} = require('react-router')
const {Banner} = require('rebass')

const Home = React.createClass({
    getInitialState() {
        return {logout: false, nickname: ''}
    },
    componentDidMount() {
        if (!this.props.auth.loggedIn() && this.props.location.hash.indexOf('access_token') === -1) {
            this.props.auth.login()
        }
    },
    render() {
        return (
            <div className="bg-near-black">
                <Banner align="left" backgroundImage="https://i.imgsafe.org/c4e72f1b31.jpeg">
                    <h1 className="">
                        <p className="fl f3 f-subheadline-ns fw6 avenir tracked-mega ttu pb6-l pl2">Pet Duet</p>
                    </h1>
                </Banner>
                <footer className="bg-near-black white-80 pb4 ph4">
                    <p className="f6 f4-ns tc">
                        <a className="link white-80 hover-light-purple db" target="_blank" href="http://www.github.com/joshuaasmith">Github</a>
                        <a className="link white-80 hover-green avenir db" href="mailto:joshua.aaron.smith17@gmail.com">joshua.aaron.smith17@gmail.com</a>
                    </p>
                </footer>
            </div>
        )
    }
})

module.exports = Home
