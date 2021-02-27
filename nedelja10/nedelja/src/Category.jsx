import { useParams } from "react-router-dom"
import OneProduct from "./components/OneProduct"
import Product from "./components/Product"

const Category = ({ products }) => {
    let { category } = useParams()
    let productByCategory = products.filter(product => product.category === category)
    return (
        <div>
            {productByCategory.map(product => productByCategory.length !== 1 ? <Product key={product.id} product={product} /> : <OneProduct key={product.id} product={product} />)}
        </div>
    )
}
export default Category