const React = require('react')
const PageTitle = require('../components/page-title')
const Footer = require('../components/footer')
const GlossaryCard = require('../components/glossary-card')
const Break = require('../components/break')

const Glossary = React.createClass({
    render() {
        return (
            <div>
                <div className="center mt4">
                    <div className="center tc">
                        <PageTitle title="Glossary"/>
                    </div>
                    <Break/>
                    <div>
                        <GlossaryCard word="Canine Distemper" definition="This highly contagious viral disease is found wherever dogs are found. It affects the respiratory and nervous system and is often fatal. Primary vaccination should begin at 6-12 weeks of age since dogs often contract the disease at an early age."/>
                        <GlossaryCard word="Canine Parvovirus (CPV)" definition="This contagious viral disease usually causes severe diarrhea and vomiting in dogs of all ages, but is especially deadly in puppies."/>
                        <GlossaryCard word="Rabies" definition="Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control."/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = Glossary
