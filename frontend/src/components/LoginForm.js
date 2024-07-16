import React, { useContext, useState }  from 'react';
import AuthContext from '../context/AuthContext';

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault()  // prevent page refresh

        try {
            const success = await loginUser(e.target.username.value, e.target.password.value)
            setLoginFailed(false)
        } catch {
            setPassword('')
            setUsername('')
            setLoginFailed(true)
        }
    }

    return (
        <div id="login-div" className="flex items-center justify-center my-4">
            <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg p-8 max-w-sm ">
                <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} 
                    placeholder="username" required />
                <input className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password" required />
                <input className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 "
                    type="submit" value="Login" />
            </form>

            {loginFailed ? <h3 style={{ color: 'red' }}>Invalid credentials, try again</h3> : null}
        </div>
    )

}

export default LoginForm
