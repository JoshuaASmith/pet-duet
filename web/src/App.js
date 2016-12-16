const React = require('react')
const {Match, HashRouter, Redirect} = require('react-router')
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
const NavBar = require('./components/navbar')
const auth = require('./utils/auth')(process.env.REACT_APP_ID, process.env.REACT_APP_DOMAIN)

const App = React.createClass({
    // getInitialState() {
    //     return {logout: false}
    // },
    logout(e) {
        auth.logout()
        this.setState({logout: true})
    },
    render() {
        return (
            <HashRouter>
                <div>
                    <NavBar/>
                    <Match exactly pattern="/" render={props => <Home auth={auth} {...props}/>}/>
                    <Match exactly pattern="/about" component={About}/>
                    <MatchWhenAuthorized exactly pattern="/pets" component={Pets}/>
                    <Match pattern="/pets/new" component={PetsForm}/>
                    <MatchWhenAuthorized pattern="/pets/:id/edit" component={PetsForm}/>
                    <MatchWhenAuthorized pattern="/pets/:id/show" component={ShowPet}/>
                    <MatchWhenAuthorized exactly pattern="/procedures" component={Procedures}/>
                    <MatchWhenAuthorized pattern="/procedures/new" component={ProceduresForm}/>
                    <MatchWhenAuthorized exactly pattern="/procedures/:id/edit" component={ProceduresForm}/>
                    <MatchWhenAuthorized pattern="/procedures/:id/show" component={ShowProcedure}/>
                    <MatchWhenAuthorized exactly pattern="/categories" component={Categories}/>
                    <MatchWhenAuthorized pattern="/categories/new" component={CategoriesForm}/>
                    <MatchWhenAuthorized exactly pattern="/categories/:id/edit" component={CategoriesForm}/>
                    <MatchWhenAuthorized pattern="/categories/:id/show" component={ShowCategory}/>
                    <Match pattern="/glossary" component={Glossary}/>
                </div>
            </HashRouter>
        )
    }
})

const MatchWhenAuthorized = ({
    component: Component,
    ...rest
}) => <Match {...rest} render={props => auth.loggedIn()
    ? <div>
            <Component {...props}/>
        </div>
    : <Redirect to="/"/>}/>

module.exports = App
