const React = require('react')
const {Match, BrowserRouter, Link} = require('react-router')
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
const Glossary = require('./pages2/glossary')

const App = React.createClass({
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="avenir">
                        <header>
                            <nav className="pa3 pa4-ns bb bg-light-gray bw2 b--dark-blue">
                                <Link className="link dim black b f1 fw6 ml6 dark-blue tc" to="/" title="Home-Pet Duet">Pet Duet</Link>
                                <div className="fr mr6 mt2">
                                    <Link className="link dim gray f4 f3-ns dib mr3 mh5 hover-near-black no-underline" to="/about" title="About">About</Link>
                                    <Link className="link dim gray f4 f3-ns dib mr3 mh5 hover-near-black" to="/pets" title="Pets">Pets</Link>
                                    <Link className="link dim gray f4 f3-ns dib mr3 mh5 hover-near-black" to="/procedures" title="Procedures">Procedures</Link>
                                    <Link className="link dim gray f4 f3-ns dib mr3 mh5 hover-near-black" to="/glossary" title="Glossary">Glossary</Link>
                                </div>
                            </nav>
                        </header>
                    </div>
                    <Match exactly pattern="/" component={Home}/>
                    <Match exactly pattern="/about" component={About}/>
                    <Match exactly pattern="/pets" component={Pets}/>
                    <Match pattern="/pets/new" component={PetsForm}/>
                    <Match exactly pattern="/pets/:id/edit" component={PetsForm}/>
                    <Match pattern="/pets/:id/show" component={ShowPet}/>
                    <Match exactly pattern="/procedures" component={Procedures}/>
                    <Match pattern="/procedures/new" component={ProceduresForm}/>
                    <Match exactly pattern="/procedures/:id/edit" component={ProceduresForm}/>
                    <Match pattern="/procedures/:id/show" component={ShowProcedure}/>
                    <Match exactly pattern="/categories" component={Categories}/>
                    <Match pattern="/categories/new" component={CategoriesForm}/>
                    <Match exactly pattern="/categories/:id/edit" component={CategoriesForm}/>
                    <Match pattern="/categories/:id/show" component={ShowCategory}/>
                    <Match pattern="/glossary" component={Glossary}/>
                </div>
            </BrowserRouter>
        )
    }
})

module.exports = App
