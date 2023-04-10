import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "../About/About";
import "./FloatingButton.scss";

const FloatingButton = (props) => {
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const setUnchecked = () => {
    setChecked(false);
  };

  return (
    <>
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
            <span onClick={() => navigate("/todo")}>Todo List</span>
            <span><Link to="/about">About</Link></span>
            <span onClick={() => props.logout()}>Logout</span>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default FloatingButton;
