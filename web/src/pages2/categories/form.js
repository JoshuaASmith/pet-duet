const React = require('react')
const {Link, Redirect} = require('react-router')
const data = require('../../utils/data')()
const TextField = require('../../components/text-field')
const ButtonComponent = require('../../components/button-save')

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
                this.setState({resolved: true})
            })
        } else {
            data.post('categories', this.state.category).then(res => {
                this.setState({resolved: true})
            }).catch(err => console.log(err))
        }
    },
    render() {
        const formState = this.state.category._id
            ? 'Edit'
            : 'New'
        return (
            <div className="pa2">
                {this.state.resolved && this.state._id
                    ? <Redirect to={`/categories/${this.state._id}/show`}/>
                    : null}
                {this.state.resolved && !this.state._id
                    ? <Redirect to={`/categories`}/>
                    : null}
                <h1 className="f1 fw1">{formState + ' '}
                    Category</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField label="Category" value={this.state.category.category} onChange={this.handleChange('category')}/>
                    <div>
                        <ButtonComponent title="Save"/>
                    </div>
                    <Link to="/categories"><ButtonComponent title="Return"/></Link>
                </form>

            </div>
        )
    }
})

module.exports = CategoriesForm
