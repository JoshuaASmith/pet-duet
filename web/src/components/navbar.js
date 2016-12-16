const React = require('react')
const {Link} = require('react-router')
const auth = require('../utils/auth')(process.env.REACT_APP_ID, process.env.REACT_APP_DOMAIN)

const NavBar = React.createClass({
    render() {
        return (
            <div className="avenir">
                <nav className="db dt-l w-100 border-box pa3 ph5-l pv4 bb bg-light-gray bw2 b--dark-blue">
                    <Link className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l f1 fw6 dark-blue" to="/" title="Pet Duet">Pet Duet</Link>
                    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                        <Link className="link dim gray f5 f4-l dib mr3 mr4-l" to="/about" title="About">About</Link>
                        <Link className="link dim gray f5 f4-l dib mr3 mr4-l" to="/pets" title="Pets">Pets</Link>
                        <Link className="link dim gray f5 f4-l dib mr3 mr4-l" to="/glossary" title="Glossary">Glossary</Link>
                        <Link className="link dim gray f5 f4-l dib mr3 mr4-l" to="/" title="Logout" onClick={e => auth.logout()}>Logout</Link>
                    </div>
                </nav>
            </div>
        )
    }
})

module.exports = NavBar
