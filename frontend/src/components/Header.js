import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
    const { authTokens } = useContext(AuthContext)

    return (
        <header className="bg-blue-300 p-4">
            <nav className="flex items-center justify-between">
                <h1 className="text-black font-bold underline">Quote Keeper</h1>
                <ul className="flex space-x-4">
                    <li className="text-black hover:underline"><Link to="/">Home</Link></li>
                    { authTokens ? 
                        <>
                        <li className="text-black hover:underline"><Link to="/explore">Explore</Link></li>
                        <li className="text-black hover:underline"><Link to="/my-quotes">My Quotes</Link></li>
                        </>
                        : <> <li className="text-black hover:underline"><Link to="/register">Create Account</Link></li> </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header
