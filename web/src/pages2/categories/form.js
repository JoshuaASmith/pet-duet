const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')

const CategoriesForm = React.createClass({
    getInitialState() {
        return {category: {}, resolved: false, success: false}
    },
    componentDidMount() {
        if (this.props.params.id) {
            data.get('categories', this.props.params.id).then(category => {
                this.setState({category})
            })
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
        if (this.state.category._id) {
            data.put('categories', this.state.category._id, this.state.category).then(category => {
                this.setState({category})
            })
        } else {
            data.post('categories', this.state.category).then(res => this.setState({resolved: true}))
        }
    },
    render() {
        const formState = this.state.category.id
            ? 'Edit'
            : 'New'
        return (
            <div className="pa2">
                {this.state.resolved && this.state.id
                    ? <Redirect to={`/categories/${this.state.id}/show`}/>
                    : null}
                {this.state.resolved && !this.state.id
                    ? <Redirect to={`/categories`}/>
                    : null}
                <h1 className="f1 fw1">{formState + ' '}
                    Category</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Category</label>
                        <input value={this.state.category.category} onChange={this.handleChange('category')}/>
                    </div>
                    <div>
                        <button>Save Category</button>
                    </div>
                    <Link to="/categories">Return</Link>
                </form>

            </div>
        )
    }
})

module.exports = CategoriesForm
