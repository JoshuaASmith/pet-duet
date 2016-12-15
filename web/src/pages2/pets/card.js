const React = require('react')
const MBreak = require('../../components/mini-break')

const PetCard = React.createClass({
    render() {
        return (
            <div>
                <div className="tc avenir">
                    <div className="mt3">
                        <img className="h5" src={this.props.pet.file} role="presentation"/>
                    </div>
                    <dl className="lh-title pa4 mt0">
                        <dt className="f5 b">Pet Name</dt>
                        <dd className="ml0">{this.props.pet.petName}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Date of Birth</dt>
                        <dd className="ml0">{this.props.pet.petDOB}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Owner Name</dt>
                        <dd className="ml0">{this.props.pet.ownerFirstName + ' ' + this.props.pet.ownerLastName}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Owner Phone Number</dt>
                        <dd className="ml0">{this.props.pet.ownerPhone}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Owner Email</dt>
                        <dd className="ml0">{this.props.pet.ownerEmail}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Pet Species/Breed</dt>
                        <dd className="ml0">{this.props.pet.petSpeciesBreed}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Pet Gender</dt>
                        <dd className="ml0">{this.props.pet.petGender}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Special Markings</dt>
                        <dd className="ml0">{this.props.pet.petMarkings}</dd>
                        <MBreak/>
                        <dt className="f5 b mt2">Date Acquired</dt>
                        <dd className="ml0">{this.props.pet.petDateAcquired}</dd>
                    </dl>
                </div>
            </div>
        )
    }
})

module.exports = PetCard
