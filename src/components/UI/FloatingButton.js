import { useState } from "react";

import "./FloatingButton.scss";
import { Link, useNavigate } from "react-router-dom";

const FloatingButton = (props) => {

  const navigate = useNavigate();

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
          <span>Todo List</span>
          <span> <Link to='/about'>About</Link></span>
          <span><Link to='/login'>Logout</Link></span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
