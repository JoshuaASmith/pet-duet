const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')

const CategoriesForm = React.createClass({
    getInitialState() {
        return {
            category: {
                category: ''
            },
            resolved: false
        }
    },
    handleChange(field) {
        return (e) => {
            let category = {
                ...this.state.category
            }
            category[field] = e.target.value
            this.setState({category})
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        data.post('categories', this.state.category).then(res => this.setState({resolved: true}))
    },
    render() {
        return (
            <div className="pa2">
                {this.state.resolved
                    ? <Redirect to="/categories"/>
                    : null}
                <h1>New Category</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Category</label>
                        <input value={this.state.category.category} onChange={this.handleChange('category')}/>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                    <Link to="/categories">Return</Link>
                </form>

            </div>
        )
    }
})

module.exports = CategoriesForm
