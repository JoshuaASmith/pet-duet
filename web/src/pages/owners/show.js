const React = require('react')
const {Link} = require('react-router')

const OwnersShow = React.createClass({
    render() {
        return (
            <div>
                <Link to="/owners">Return</Link>
            </div>
        )
    }
})

module.export = OwnersShow
