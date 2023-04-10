import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [loginForm, setLoginForm] = useState ({
    email: '',
    password: '',
  });
  const navigate = useNavigate ();
  const handleChange = e => {
    e.preventDefault ();
    setLoginForm (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const login = e => {
    e.preventDefault ();
    if (loginForm.email === 'Admin' && loginForm.password === 'admin') {
      localStorage.setItem ('isLoggedIn', '1');
      localStorage.setItem ('user', 'Admin');
      navigate ('/home');
    }
  };
  return (
    <div>
      <form className="text-center my-4 text-light">
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2`}
          id="email"
          name="email"
          value={loginForm.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          className={`form-control mb-3`}
          id="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <button type="submit" onClick={e => login (e)} className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
