import { Link } from "react-router-dom";
import FloatingButton from "../FloatingButton";
import { useNavigate } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';

function Home(props) {


  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ position: 'absolute', top: 0, left: 0 }}
      >Go Back</button>
      <h1>Welcome to My App!</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todolist">Todo List</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <FloatingButton handleLogout={props.handleLogout} />


    </div>
  );
}
export default Home;