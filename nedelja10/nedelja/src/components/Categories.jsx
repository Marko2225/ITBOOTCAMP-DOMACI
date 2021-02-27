import { Link } from "react-router-dom"

const Categories = ({ products }) => {
    let categories = [...new Set(products.map(product => product.category))]
    return (
        <div>
            {
                categories.map(category => {
                    return (
                        <div key={category}>
                            <Link to={`categories/${category}`}>{category}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Categories