import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Quotes from './components/Quotes'
import CreateQuote from './components/CreateQuote'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import Quote from './components/Quote'

function App() {
    const [user, setUser] = useState(null)
    return (
        <>
            <Router>
                {
                    user ?
                        <>
                            <h3>Welcome {user.username}</h3>
                            <Link style={{ padding: '10px', fontSize: '20px', margin: '10px' }} to="/">Home</Link>
                            <Link style={{ padding: '10px', fontSize: '20px', margin: '10px' }} to="/quotes">Quotes</Link>
                            <Link style={{ padding: '10px', fontSize: '20px', margin: '10px' }} to="/createquote">Create Quote</Link>
                            <button style={{ float: 'right' }} onClick={() => { setUser(null) }}>Logout</button>
                        </>
                        :
                        <>
                            <Link style={{ padding: '10px', fontSize: '20px', margin: '10px' }} to="/login">Login</Link>
                            <Link style={{ padding: '10px', fontSize: '20px', margin: '10px' }} to="/register">Register</Link>
                        </>

                }


                <Switch>
                    <Route exact path="/">
                        <Home user={user} />
                    </Route>
                    <Route exact path="/quotes">
                        <Quotes user={user} />
                    </Route>
                    <Route exact path="/quotes/:id">
                        <Quote />
                    </Route>
                    <Route exact path="/createquote">
                        <CreateQuote user={user} />
                    </Route>
                    <Route exact path="/login">
                        <Login setUser={setUser} />
                    </Route>
                    <Route exact path="/register">
                        <Register setUser={setUser} />
                    </Route>

                </Switch>
            </Router>
        </>
    );
}

export default App;
