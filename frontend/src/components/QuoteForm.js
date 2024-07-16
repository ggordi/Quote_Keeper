import React, { useContext, useState }  from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { api_base } from '../constants';

const QuoteForm = ({ onQuoteAdd }) => {
    const { authTokens } = useContext(AuthContext)
    let [content, setContent] = useState("")
    let [source, setSource] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post(`${api_base}user-quotes/`, {content, source}, {
                headers: {
                    Authorization: `Bearer ${authTokens.access}`
                }
            })
            setContent("")
            setSource("")
            onQuoteAdd()
        } catch {
            console.error("failed to create quote ")
        }
    }

    return (
        
        <div className="flex items-center justify-center">
            <div className="w-1/4 bg-blue-300 p-4 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <textarea 
                        className="w-full mb-4 mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                        placeholder="Content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                    <input  
                        className="block w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type='text' 
                        placeholder="Source" 
                        value={source}
                        onChange={(e) => setSource(e.target.value)} 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
                    >
                        Add Quote
                    </button>

                </form>
            </div>
        </div>
    )
}

export default QuoteForm