import { useState } from "react";

import "./FloatingButton.scss";
import {Link, Navigate } from "react-router-dom";

const FloatingButton = (props) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
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
          <Link id="link" to="/todo"><span>Todo List</span></Link>
          <Link id="link" to="/about"><span>About</span></Link>
          <Link id="link" onClick={() =>props.changeState(false)}><span >Logout</span></Link>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
