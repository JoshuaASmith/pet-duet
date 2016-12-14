const React = require('react')
const {Link} = require('react-router')
const data = require('../../utils/data')()
const ButtonComponent = require('../../components/button-save')
const PageTitle = require('../../components/page-title')
const Footer = require('../../components/footer')
const {filter} = require('ramda')

const Pets = React.createClass({
    getInitialState() {
        return {pets: [], filtered: []}
    },
    componentDidMount() {
        data.list('pets').then(obj => {
            this.setState({pets: obj.docs, filtered: obj.docs})
        })
    },
    filter(e) {
        this.setState({
            filtered: filter(pet => pet.petName.indexOf(e.target.value) === 0, this.state.pets)
        })
    },
    render() {
        const li = pet => <li key={pet._id}>
            <Link to={`/pets/${pet._id}/show`}>{pet.petName + ' ' + pet.ownerLastName}</Link>
        </li>
        const funli = pet => <li key={pet._id} className="flex items-center lh-copy pa3 ph0-l bb b--black-50">
            <img className="w2 h2 w3-ns h3-ns br-100" src={pet.file} role="presentation"/>
            <div className="pl3 flex-auto tc center">
                <Link className="link dark-blue" to={`/pets/${pet._id}/show`}>{pet.petName + ' ' + pet.ownerLastName}</Link>
            </div>
        </li>
        return (
            <div>
                <div className="w-50 center tc mt4">
                    <PageTitle title="Search Pet Database"/>
                    <div className="mt3">
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 tc" type="text" name="pet-search" onChange={this.filter}/>
                    </div>
                    <ul className="list mr5 avenir f2">
                        {this.state.filtered.map(funli)}
                    </ul>
                </div>
                <Link to="/pets/new">
                    <ButtonComponent title="New Pet"/>
                </Link>
                <Footer/>
            </div>
        )
    }
})

module.exports = Pets
