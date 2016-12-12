const React = require('react')
const data = require('../../utils/data')()
const {Link} = require('react-router')
const ButtonComponent = require('../../components/button-save')
const Footer = require('../../components/footer')

const Categories = React.createClass({
    getInitialState() {
        return {categories: []}
    },
    componentDidMount() {
        data.list('categories').then(obj => {
            this.setState({categories: obj.docs})
        })
    },
    render() {
        const li = category => <li key={category._id}>
            <Link to={`/categories/${category._id}/show`}>{category.category}</Link>
        </li>
        return (
            <div>
                <h2>Categories</h2>
                <ul>
                    {this.state.categories.map(li)}
                </ul>
                <Link to="/categories/new">
                    <ButtonComponent title="New Category"></ButtonComponent>
                </Link>
                <Footer/>
            </div>
        )
    }
})

module.exports = Categories
