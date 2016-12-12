const React = require('react')

const PetCard = React.createClass({
    render() {
        return (
            <div>
                <div className="tc">
                    <h3>{this.props.pet._id}</h3>
                    <h3>{this.props.pet.petName}</h3>
                    <div>
                        <img src={this.props.pet.file} style={{
                            height: '200px'
                        }} role="presentation"/>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = PetCard
