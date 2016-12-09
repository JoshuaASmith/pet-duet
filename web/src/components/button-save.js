const React = require('react')
const {Button} = require('rebass')

const ButtonComponent = React.createClass({
    render() {
        return (
            <div className="dim tc">
                <Button backgroundColor="gray" color="dark-gray" inverted rounded big>
                    {this.props.title}
                </Button>
            </div>
        )
    }
})

module.exports = ButtonComponent
