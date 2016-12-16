const React = require('react')
const {Link} = require('react-router')
const {Space} = require('rebass')

const OldNav = React.createClass({
    render() {
        return (
            <div className="avenir">
                <header>
                    <nav className="pa3 pa4-ns bb bg-light-gray bw2 b--dark-blue">
                        <Link className="link dim black b f1 fw6 ml6 dark-blue tc" to="/" title="Home-Pet Duet">Pet Duet</Link>
                        <div className="fr mr6 mt2">
                            <Link className="link dim gray f4 f3-ns dib hover-near-black no-underline" to="/about" title="About">About</Link>
                            <Space x={3}/>
                            <Link className="link dim gray f4 f3-ns dib hover-near-black" to="/pets" title="Pets">Pets</Link>
                            {/* <Space x={3}/>
                      <Link className="link dim gray f4 f3-ns dib hover-near-black" to="/procedures" title="Procedures">Procedures</Link> */}
                            <Space x={3}/>
                            <Link className="link dim gray f4 f3-ns dib hover-near-black" to="/glossary" title="Glossary">Glossary</Link>
                            <Space x={3}/>
                            <Link className="link dim gray f4 f3-ns dib hover-near-black" to="/" title="Logout" onClick={e => auth.logout()}>Logout</Link>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
})

module.exports = OldNav
