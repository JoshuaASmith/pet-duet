const React = require('react')
const {Link} = require('react-router')

const Home = React.createClass({
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/pets">Pets</Link>
                    </li>
                    <li>
                        <Link to="/procedures">Procedures</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Home
