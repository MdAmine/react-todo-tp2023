import { useRef,useEffect } from "react";
function Login(props) {

    const email = useRef();
    const password = useRef();
    const users=[
      {
        id: 1,
        email: "hamzaessakhi01@gmail.com",
        password: "123456",
      },
      {
        id: 2,
        email: "ali@gmail.com",
        password: "654321",
      },        
    ] 

  

    const handleLogin = (e) =>{
      e.preventDefault();
      
      var etat=false
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email.current.value && users[i].password === password.current.value) {
           etat=true;
           break;
        }
      }  

      if (etat) {
         props.changeState(etat)  
      }
      else{
        alert("email or password invalide")
      }
        
    }
    
    return (
     <form className="text-center my-4 text-light" onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-dark" >
          Login
        </button>
      </form>
    );
}
export default Login;