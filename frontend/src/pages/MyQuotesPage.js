import React, { useContext, useState, useEffect } from "react"
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { api_base } from '../constants'; 
import Header from '../components/Header'
import QuoteForm from '../components/QuoteForm'

const MyQuotesPage = () => {

    const { user, authTokens } = useContext(AuthContext)
    const [quotes, setQuotes] = useState([])

    const getQuotes = async () => {
        try {
            const response = await axios.get(`${api_base}user-quotes/`, {
                headers : {
                    Authorization: `Bearer ${authTokens.access}`
                }
            })
            setQuotes(response.data)
        } catch {
            console.error("failed to fetch quotes")
        }
    }

    const deleteQuote = async (id) => {
        try {
            await axios.delete(`${api_base}quotes/${id}/`, {
                headers: {
                    Authorization: `Bearer ${authTokens.access}`
                }
            })
            setQuotes(quotes.filter(quote => quote.id !== id))
        } catch {
            console.error("failed to delete quote")
        }
    }

    useEffect(() => {
        getQuotes()
    }, [authTokens])

    return (
        <div id="my-quotes-div">
            <Header />
            <h1 className="text-3xl my-5 font-bold">My Quotes</h1>
            <ul className="flex flex-col items-center">
                {quotes.map((quote, index) => (
                    <div key={quote.id} className="relative p-4 my-10 w-1/2 bg-blue-200 rounded-xl hover:bg-blue-300">
                    <button 
                        onClick={() => deleteQuote(quote.id)} 
                        className="absolute top-2 right-2 p-1"
                    >
                        <svg className="h-6 w-6 text-gray-500 hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <p className="mt-3 text-xl font-semibold">{quote.content}</p>
                    <p className="mt-2"><i>{quote.source}</i></p>
                </div>
                ))}
            </ul>
            <QuoteForm onQuoteAdd={getQuotes}/>
        </div>

        // render out the user's quotes, authenticated request
    )
}

export default MyQuotesPage