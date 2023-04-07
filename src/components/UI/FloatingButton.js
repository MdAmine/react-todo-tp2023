import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingButton.scss";

const FloatingButton = ({ handleLogout }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  const handleLogoutClick = () => {
    setChecked(false);
    handleLogout();
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
        <ul>
          <span>Todo List</span>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/">
            <span onClick={handleLogoutClick}>Logout</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default FloatingButton;
