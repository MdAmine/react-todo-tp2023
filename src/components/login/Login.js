import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Login = ({setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigation = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email: ${email} Password: ${password}`);
        handleLogin({email, password});
    };
    /*
    if (localStorage.getItem("email")){
        setUser(true)
    }
    */
    const handleLogin = ({email, password}) => {
        if (email === "admin@gmail.com" && password === "admin") {
            localStorage.setItem("email", email);
            localStorage.setItem("pass", password);
            setUser(true)
            navigation('todo')

        } else {
            setError("Invalid credentials");
            setEmail('');
            setPassword('')
        }
    };


    return (
        <>
            <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
                <h1 className="mb-4">Login Form</h1>
                <input
                    type="text"
                    className={`form-control mb-2`}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className={`form-control mb-3`}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div style={{color: 'red'}}>  {error}</div>
                <button type="submit" className="btn btn-dark">
                    Login
                </button>
            </form>
        </>
    )
}

export default Login;