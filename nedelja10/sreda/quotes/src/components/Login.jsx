import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers } from "../service"

const Login = ({setUser}) => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    useEffect(() =>{
        getAllUsers().then(res => setUsers(res.data))
    }, [])

    const isRegisteredUser = (user, users) => {
       return users.find(el => el.username === user.username && el.password === user.password)
    }

    const isLoggedIn = (user, users) => {
        if(isRegisteredUser(user, users)){
            setUser(user)
            history.push('/quotes')
        }
        else {
            history.push('/login')
        }
    }

    return(
        <div>
            <label>Username: </label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            <label>Password: </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => {
                let user = {username, password}
                isLoggedIn(user, users)
            }}>Login</button>
            <div>
                <button onClick={() => { history.push('/register')}}>Register</button>
            </div>
        </div>
    )
}

export default Login