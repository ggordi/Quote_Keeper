import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api_base } from '../constants';

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== password2) {
            setErrorMessage("Passwords do not match.");
            setSuccessMessage("")
            setUsername("")
            setPassword("")
            setPassword2("")
            return;
        }

        try {
            await axios.post(`${api_base}register/`, {
                username,
                password,
            });
            setSuccessMessage("Registration successful! Navigate to home to log in.")
            setErrorMessage("")
            setUsername("")
            setPassword("")
            setPassword2("")
        } catch {
            setErrorMessage("Registration failed. Please try again.");
            setSuccessMessage("");
            setUsername("")
            setPassword("")
            setPassword2("")
        }
    }

    return (
        <div className="flex flex-col items-center justify-center my-4">
            <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg p-8 max-w-sm">
                <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} 
                        placeholder="username" required />
                 <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password" required />
                 <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" name="password" value={password2} onChange={(e) => setPassword2(e.target.value)} 
                    placeholder="reenter password" required />
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
                    Register
                </button>
            </form>

            <div className="mt-4">
                {errorMessage && <p className="text-red-500 text-lg">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-lg">{successMessage}</p>}
            </div>
        </div>
    )

}

export default RegisterForm
