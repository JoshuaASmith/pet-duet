const React = require('react')
const {Link} = require('react-router')
const data = require('../../utils/data')()
const ButtonComponent = require('../../components/button-save')
const PageTitle = require('../../components/page-title')
const {filter} = require('ramda')
const {InlineForm} = require('rebass')

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
        return (
            <div>
                <div className="w-50 center tc mt4">
                    <PageTitle title="Search Pet Database"/>
                    <InlineForm buttonLabel="Search" label="InlineForm" name="inline_form" onChange={this.filter}/>
                    <ul className="list mr5 avenir f2">
                        {this.state.filtered.map(li)}
                    </ul>
                </div>
                <Link to="/pets/new">
                    <ButtonComponent title="New Pet"/>
                </Link>
                <Link to="/">
                    <ButtonComponent title="Home"/>
                </Link>
            </div>
        )
    }
})

module.exports = Pets
