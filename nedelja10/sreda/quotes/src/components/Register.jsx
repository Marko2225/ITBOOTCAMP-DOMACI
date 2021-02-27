import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers, saveUser } from "../service"

const Register = ({ setUser }) => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    let regExLetters = /[a-zA-Z]/
    let regExNumbers = /[0-9]/
    let regExEmail = /\S+@\S+\.\S+/

    useEffect(() => {
        getAllUsers().then(res => setUsers(res.data))
    }, [])

    const isValid = () => {
        if (
            username.length >= 4
            &&
            !users.map(user => user.username).includes(username)
            &&
            regExEmail.test(email)
            &&
            !users.map(user => user.email).includes(email)
            &&
            password.length >= 8
            &&
            regExLetters.test(password)
            &&
            regExNumbers.test(password)
        ) {
            return true
        }
        else {
            return false
        }
    }

    const registerUser = (user) => {
        if (isValid()) {
            saveUser(user).then(() => {
                setUser(user)
                history.push('/quotes')
            })

        }
        else {
            displayError()
            setUsername('')
            setEmail('')
            setPassword('')
        }
    }

    const displayError = () => {
        if (username.length < 4) { setError('Username is too short') }
        if (users.map(user => user.username).includes(username)) { setError('Username is taken') }
        if (!regExEmail.test(email)) { setError('Email is invalid') }
        if (users.map(user => user.email).includes(email)) { setError('Email is already registered') }
        if (password.length < 8) { setError('Password is too short') }
        if (!regExLetters.test(password)) { setError('Password must contain at least one letter') }
        if (!regExNumbers.test(password)) { setError('Password must contain a least one number') }
    }



    return (
        <div>
            <label>Username: </label>
            <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Email: </label>
            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
            <label>Password: </label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => {
                let user = { username, email, password }
                registerUser(user)
            }}>Submit</button>
            <h4>{error}</h4>
        </div>

    )
}

export default Register