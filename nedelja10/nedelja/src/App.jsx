import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Category from './Category';
import Categories from './components/Categories'
import Home from './components/Home'
import { getAllProducts } from './serice';

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts().then(res => setProducts(res.data))
    }, [])

    return (
        <div className="App">
            <Router>
                <Link style={{ padding: '10px' }} to='/'>Home</Link>
                <Link style={{ padding: '10px' }} to="/categories">Categories</Link>
                <Switch>
                    <Route exact path="/">
                        <Home products={products} />
                    </Route>
                    <Route exact path='/categories'>
                        <Categories products={products} />
                    </Route>
                    <Route exact path='/categories/:category'>
                        <Category products={products}/>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
