const React = require('react')
// const {Link} = require('react-router')
const {Banner, Heading} = require('rebass')

const Home = React.createClass({
    render() {
        return (
            <div>
                <Banner align="left" backgroundImage="https://i.imgsafe.org/c4e72f1b31.jpeg">
                    <Heading level={1} size={0} big>
                        <p className="Heading" style={{
                            paddingBottom: 180,
                            paddingLeft: 75,
                            boxSizing: 'border-box',
                            fontSize: 64,
                            fontWeight: 600,
                            lineHeight: '1.25',
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontFamily: '"Avenir Next", sans-serif',
                            float: 'left'
                        }}>Pet Duet</p>
                    </Heading>
                </Banner>
                <footer className="bg-near-black white-80 pv4 ph4">
                    <p className="f4 tc">
                        <a className="link white-80 hover-light-purple db" target="_blank" href="http://www.github.com/joshuaasmith">Github</a>
                        <a className="link white-80 hover-green avenir db" href="mailto:joshua.aaron.smith17@gmail.com">joshua.aaron.smith17@gmail.com
                        </a>
                    </p>
                </footer>
            </div>
        )
    }
})

module.exports = Home
