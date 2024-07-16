import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import Greeting from '../components/Greeting';
import Header from '../components/Header'

const HomePage = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold my-5">Home</h1>
            {user ? <Greeting user={user} /> : <LoginForm />}
        </div>
    );
}

export default HomePage