const React = require('react')
const {Match, BrowserRouter} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Pets = require('./pages2/pets/index')
const PetsForm = require('./pages2/pets/form')
const ShowPet = require('./pages2/pets/show')
const Procedures = require('./pages2/procedures/index')
const ShowProcedure = require('./pages2/procedures/show')

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
                    <Match exactly pattern="/procedures" component={Procedures}/>
                    <Match pattern="/procedures/:id/show" component={ShowProcedure}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
