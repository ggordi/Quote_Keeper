import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import RegisterForm from '../components/RegisterForm';
import Header from '../components/Header'

const RegisterPage = () => {
    return (
        <div>
            <Header />
            <h1 className="text-3xl font-bold my-5">Make an Account</h1>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage