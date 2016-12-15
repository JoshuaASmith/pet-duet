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
                        <GlossaryCard word="Feline Leukemia" definition="Feline Leukemia is a form of cancer in cats which is usually fatal. The disease, caused by a virus, can lead to tumor growth nearly anywhere in the body as well as a variety of other symptoms. Infected cats are unable to resist other diseases and may die from associated infections. Testing for the disease is recommended prior to initiating a vaccination program."/>
                        <GlossaryCard word="Feline Infectious Peritonitis (FIP)" definition="FIP is a disease caused by a coronavirus. The virus is spread by direct cat-to-cat contact or by contact with contaminated surfaces. There are 2 manifestations of the disease, wet and dry, and both have nonspecific symptoms such as intermittent inappetence, depression, rough hair coat, weight loss, and fever. There is no cure and the disease is considered fatal."/>
                        <GlossaryCard word="Rabies" definition="Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control."/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = Glossary
