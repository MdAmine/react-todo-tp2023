import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {TodoList} from '../Todo/Todo';
import Home from '../Home/Home';
import About from '../About/About';
import Login from '../Login/Login';
import { LoginContext } from '../Context/LoginProvider';
import UpdateTodoItem from '../Todo/UpdateTodoItem';


function AppRoutes() {
    const { isLoggedIn } = useContext(LoginContext);
  
    return (
        <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/updateTodo" element={<UpdateTodoItem />} />
          <Route exact path="/todolist" element={<TodoList />} />
          <Route path="/login" element={<Login />}/>
    </Routes>
        
            
        
      </>
    );
    
  }
  export default AppRoutes