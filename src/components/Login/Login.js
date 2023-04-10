import { useRef } from "react"

const Login= (props) =>{
    const passwordRef=useRef()
    const emailRef=useRef()
    const login= (event)=>{
        event.preventDefault();
        props.login(emailRef.current.value,passwordRef.current.value)
    }
    return (
        <form className="text-center my-4 text-light" onSubmit={login}>
            <h1 className="mb-4">Login Form</h1>
            <input
            type="text"
            className={`form-control mb-2`}
            id="email"
            placeholder="Email"
            ref={emailRef}
            />
            <input
            type="text"
            className={`form-control mb-3`}
            id="password"
            placeholder="Enter your Password"
            ref={passwordRef}
            />
            <button type="submit" className="btn btn-dark" >
            Login
            </button>
        </form>
    )
}
export default Login