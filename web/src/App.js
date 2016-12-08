const React = require('react')
const {Match, BrowserRouter} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Pets = require('./pages2/pets/index')
const PetsForm = require('./pages2/pets/form')
const ShowPet = require('./pages2/pets/show')

const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Pet Duet</h1>
                    <Match exactly pattern="/" component={Home}/>
                    <Match exactly pattern="/about" component={About}/>
                    <Match exactly pattern="/pets" component={Pets}/>
                    <Match exactly pattern="/pets/new" component={PetsForm}/>
                    <Match pattern="/pets/:id/show" component={ShowPet}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
