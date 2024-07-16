import React, { useContext, useState, useEffect } from "react"
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { api_base } from '../constants'; 
import Header from '../components/Header'

const ExplorePage = () => {

    const { authTokens } = useContext(AuthContext)
    const [quotes, setQuotes] = useState([])

    const getQuotes = async () => {
        try {
            const response = await axios.get(`${api_base}quotes/`, {
                headers : {
                    Authorization: `Bearer ${authTokens.access}`
                }
            })
            setQuotes(response.data)
        } catch {
            console.error("failed to fetch quotes")
        }
    }

    useEffect(() => {
        getQuotes()
    }, [authTokens])

    return (
        <div id="my-quotes-div">
            <Header />

            <h1 className="text-3xl my-5 font-bold">Explore Quotes</h1>
            <ul  className="flex flex-col items-center">
                {quotes.map((quote, index) => (
                    <div key={index} className="p-4 my-10 w-1/2  bg-blue-200 rounded-xl hover:bg-blue-300">
                        <p className="text-xl font-semibold">{quote.content}</p>
                        <p className="mt-2"><i>{quote.source}</i></p>
                    </div>
                ))}
            </ul>
        </div>

        // render out the user's quotes, authenticated request
    )
}

export default ExplorePage