import { useState } from "react";
import "./task.css"
let Task=()=> {
        
        const [userInput,setUserInput]= useState('');
        const [id,setId]=useState('');
        let handleChange = (e)=>{
            setUserInput(e.currentTarget.value);
        }

    return (
        <>
         <h1>Task</h1>
         <input type="text" onChange={handleChange}/>  
         <button onClick={
             ()=>{
                setId(Math.random());
             }
         }>Add</button> 
         </>
    );
}

export default Task;