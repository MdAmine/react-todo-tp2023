import { useState, useRef } from "react";
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [items, setItems] = useState([]);
  const OnSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Email: ", email);
    console.log("Password: ", password);
    const storedUser = { email: "khadija@email.com", password: "1234" };
    if (email === storedUser.email && password === storedUser.password) {
      //localStorage.setItem("isLoggedIn", true);
      alert("succes");
      window.location.href = "/todo";
    } else {
      alert("email or password incorrect");
    }
  };
  return (
    <form className="text-center my-4 text-light" onSubmit={OnSubmit}>
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
        ref={emailRef}
      />
      <input
        type="password"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
        ref={passwordRef}
      />
      <button type="submit" className="btn btn-dark">
        Login
      </button>
    </form>
  );
}
export default Login;
