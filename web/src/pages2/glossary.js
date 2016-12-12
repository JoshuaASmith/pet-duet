const React = require('react')
const PageTitle = require('../components/page-title')
const Footer = require('../components/footer')

const Glossary = React.createClass({
    render() {
        return (
            <div>
                <div className="vh-75 w-50 center tc mt4">
                    <PageTitle title="Glossary"/>
                </div>
                <Footer/>
            </div>
        )
    }
})

module.exports = Glossary
