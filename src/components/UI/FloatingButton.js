import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingButton.scss";

const FloatingButton = ({ logout }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const handleLogoutClick = () => {
    setChecked(false);
    localStorage.clear();
    logout();
  };

  return (
    <div className="buttonContainer" onBlur={setUnchecked}>
      <input
        type="checkbox"
        id="toggle"
        className={checked ? "checked" : ""}
        onClick={handleClick}
      />
      <label className="button" htmlFor="toggle"></label>
      <nav className="nav">
        <ul >
          <br />
          <Link to="/todo" style={{textDecoration:"none"}}>
            <span>Todo List</span>
          </Link>
          <br />
          <Link to="/about" style={{textDecoration:"none"}}>
            <span> About</span>
          </Link>
          <br />
          <span onClick={handleLogoutClick}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingButton;
