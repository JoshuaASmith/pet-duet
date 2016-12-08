const React = require('react')
const {Match, BrowserRouter} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Pets = require('./pages2/pets/index')
const PetsForm = require('./pages2/pets/form')
const ShowPet = require('./pages2/pets/show')
const Procedures = require('./pages2/procedures/index')
const ProceduresForm = require('./pages2/procedures/form')
const ShowProcedure = require('./pages2/procedures/show')
const Categories = require('./pages2/categories/index')
const CategoriesForm = require('./pages2/categories/form')
const ShowCategory = require('./pages2/categories/show')

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
                    <Match exactly pattern="/pets/:id/edit" component={PetsForm}/>
                    <Match pattern="/pets/:id/show" component={ShowPet}/>
                    <Match exactly pattern="/procedures" component={Procedures}/>
                    <Match exactly pattern="/procedures/new" component={ProceduresForm}/>
                    <Match exactly pattern="/procedures/:id/edit" component={ProceduresForm}/>
                    <Match pattern="/procedures/:id/show" component={ShowProcedure}/>
                    <Match exactly pattern="/categories" component={Categories}/>
                    <Match exactly pattern="/categories/new" component={CategoriesForm}/>
                    <Match exactly pattern="/categories/:id/edit" component={CategoriesForm}/>
                    <Match pattern="/categories/:id/show" component={ShowCategory}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
