const React = require('react')

const GlossaryCard = React.createClass({
    render() {
        return (
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3 avenir">{this.props.word}</h1>
                <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0 avenir">
                        {this.props.definition}
                    </p>
                </div>
            </article>
        )
    }
})

module.exports = GlossaryCard
