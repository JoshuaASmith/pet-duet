const React = require('react')
const {Match, BrowserRouter} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Owners = require('./pages/owners/index')
const OwnersForm = require('./pages/owners/form')
const PetsForm = require('./pages/pets/form')

const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Pet Duet</h1>
                    <Match exactly pattern="/" component={Home}/>
                    <Match exactly pattern="/about" component={About}/>
                    <Match exactly pattern="/owners" component={Owners}/>
                    <Match pattern="/owners/new" component={OwnersForm}/>
                    <Match pattern="/owners/:id/pets/new" component={PetsForm}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
