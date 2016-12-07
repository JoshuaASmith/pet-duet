const React = require('react')
const {Match, BrowserRouter} = require('react-router')

const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Pet Duet</h1>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
