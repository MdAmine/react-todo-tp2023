import {useRef} from "react";

function Login(props) {

    const inputRef = useRef();
    const inputRef2 = useRef()



    return (
        <form className="text-center my-4 text-light" >
            <h1 className="mb-4">Login Form</h1>
            <input
                type="text"
                className={`form-control mb-2`}
                id="email"
                placeholder="Email"
                ref={inputRef}
            />
            <input
                type="password"
                className={`form-control mb-3`}
                id="password"
                placeholder="Enter your Password"
                ref={inputRef2}

            />
            <button type="submit" className="btn btn-dark" onClick={()=> props.login(inputRef,inputRef2) }>
                Login
            </button>
        </form>
    );
}



export default Login;