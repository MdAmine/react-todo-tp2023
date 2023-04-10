import { useRef,useState } from "react";
function FormAdd(props) {

    const inputRef = useRef();
    

    const [valueRadio, setValueRadio] = useState()

    const onOptionChange = e => {
        setValueRadio(e.target.value)
    }

    const addItem= (e) =>{
        e.preventDefault();
        props.addTodoItem(inputRef.current.value,valueRadio)
        inputRef.current.value=""

    };

    return (
        <form className="add text-center my-4" onSubmit={addItem}>
            <label htmlFor="add" className="add text-light">
            Add a new todo:
            </label>
            <input
            type="text"
            className="form-control m-auto"
            name="add"
            id="add" 
            ref={inputRef}             
            />

            <label  className="priority text-light">
             Priority : 
            </label>
            
            <span className="badge bg-primary">1</span>
            <input
            type="radio"
            className=""
            name="priority" 
            value="1" 
            onChange={onOptionChange}            
            />
            <span className="badge bg-secondary">2</span> 
            <input
            type="radio"
            className=""
            name="priority" 
            value="2" 
            checked
            onChange={onOptionChange}            
            />
            <span className="badge bg-success">3</span> 
            <input
            type="radio"
            className=""
            value="3"
            name="priority"   
            onChange={onOptionChange}             
            />
            <span className="badge bg-danger">4</span> 
            <input
            type="radio"
            className=""
            name="priority"  
            value="4"     
            onChange={onOptionChange}
                       
            />

        </form>
    );

}
export default FormAdd;