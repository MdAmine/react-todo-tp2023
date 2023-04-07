import { useState } from "react";
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
          <span>
            <Link to="/">Todo List</Link>
          </span>

          <span>
            <Link to="/about">About</Link>
          </span>

          <span>
            <Link to="/login">Logout</Link>
          </span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
