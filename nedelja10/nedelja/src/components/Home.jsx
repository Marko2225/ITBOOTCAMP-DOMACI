import Product from "./Product"

const Home = ({products}) => {
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product}/>)
            }
        </div>
    )
}
export default Home