const React = require('react')

const PetCard = React.createClass({
    render() {
        return (
            <div>
                <div className="tc">
                    <h3>{this.props.pet._id}</h3>
                    <h3>{this.props.pet.petName}</h3>
                </div>
            </div>
        )
    }
})

module.exports = PetCard
