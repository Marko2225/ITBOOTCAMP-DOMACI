import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllQuotes } from "../service"

const Quotes = ({ user }) => {
    const [quotes, setQuotes] = useState([])
    const history = useHistory()


    useEffect(() => {
        let mounted = true
        user ?
            getAllQuotes().then(res => {
                if (mounted) setQuotes(res.data)
            })
            :
            history.push("/login")
        return () => { mounted = false }
    }, [history, user])


    return (
        <>
        {
            quotes.map(quote => {
                return (
                    <div key={quote.id}>
                        <Link to={`quotes/${quote.id}`}>{quote.text}</Link>
                    </div>
                )
            })
        }
        </>
    )
}

export default Quotes