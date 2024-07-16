import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Greeting = ({ user }) => {
    let { logoutUser } = useContext(AuthContext)

    return (
        <div id="greeting-div">
            <h1 className="text-5xl italic my-5">Welcome, {user.username}!</h1>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Greeting;