import { useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { saveQuote } from "../service"

const CreateQuote = ({ user }) => {
    const [text, setText] = useState(null)
    const [author, setAuthor] = useState(null)
    const [error, setError] = useState('')
    const history = useHistory()

    const postQuote = (quote) => {

        if (!text) {
            setError('Quote cannot be empty')
        }
        else if (!author) {
            setError('Enter autor')
        }
        else {
            saveQuote(quote).then(() => {
                history.push('/quotes')
            })

        }
    }
    return (
        <>
            {
                user ?
                    <div>
                        <div>
                            <textarea onChange={(e) => setText(e.target.value)} placeholder="Add quote" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label>Author: </label>
                            <input onChange={(e) => { setAuthor(e.target.value) }} type="text" />
                        </div>
                        <button onClick={() => {
                            let quote = { text, author }
                            postQuote(quote)
                        }}>Submit</button>
                        <h4>{error}</h4>
                    </div>
                    :
                    <Redirect to="/login" />
            }
        </>
    )
}

export default CreateQuote