import { useRef } from "react";

const Login = (props) => {
  const email = useRef();
  const password = useRef();

  return (
    <>
      <form className="text-center my-4 text-light" onSubmit={(event) => props.handleSubmit(event, email.current.value, password.current.value)}>
        <h1 className="mb-4">Login Form</h1>
        <input
          type="text"
          className={`form-control mb-2`}
          id="email"
          placeholder="Email"
          ref={email}
        />
        <input
          type="text"
          className={`form-control mb-3`}
          id="password"
          placeholder="Enter your Password"
          ref={password}
        />
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
