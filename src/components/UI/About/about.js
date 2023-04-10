import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './styles.css';
import FloatingButton from '../FloatingButton';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/LoginProvider';

function About() {

    const {isLoggedIn} = useContext(LoginContext)
    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then(response => {
                setTodos(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }


    return (
        <div>

            <button  onClick={() => navigate(-1)} style={{ position: 'absolute', top: 0, left: 0 }}
>Go Back</button>

            <h1 className='todos'>Todos</h1>
            <ul className='tods'>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <FloatingButton />

        </div>

    );

}
export default About