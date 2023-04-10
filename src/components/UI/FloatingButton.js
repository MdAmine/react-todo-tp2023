import {useState} from 'react';

import './FloatingButton.scss';
import {Link, useNavigate} from 'react-router-dom';

const FloatingButton = () => {
  const [checked, setChecked] = useState (false);
  const navigate = useNavigate ();

  const handleClick = () => {
    setChecked (!checked);
  };

  const setUnchecked = () => {
    setChecked (false);
  };
  const logOut = () => {
    localStorage.setItem ('isLoggedIn', '0');
    navigate ('/login');
  };

  return (
    <div className="buttonContainer" onBlur={setUnchecked}>
      <input
        type="checkbox"
        id="toggle"
        className={checked ? 'checked' : ''}
        onClick={handleClick}
      />
      <label className="button" htmlFor="toggle" />
      <nav className="nav">
        <ul>
          <span>
            <Link to="/home">
              Todo List
            </Link>
          </span>
          <span><Link to="/about">About</Link></span>
          <span onClick={logOut}>Logout</span>
        </ul>
      </nav>
    </div>
  );
};
export default FloatingButton;
