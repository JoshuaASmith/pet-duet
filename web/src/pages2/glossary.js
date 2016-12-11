const React = require('react')
const {Link} = require('react-router')
const PageTitle = require('../components/page-title')
const ButtonComponent = require('../components/button-save')

const Glossary = React.createClass({
    render() {
        return (
            <div className="w-50 center tc mt4">
                <PageTitle title="Glossary"/>
                <Link to="/">
                    <ButtonComponent title="Home"/>
                </Link>
            </div>
        )
    }
})

module.exports = Glossary
