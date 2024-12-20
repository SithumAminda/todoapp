import React,{useState} from 'react'
import './ToDoapp.css'

function ToDoapp() {
    const [value,setValue]=useState("");
    const [task,setTask]=useState([]);
   const handleChange=(e)=>{
        setValue(e.target.value)
         }
         const handleClick=()=>{
            setTask([...task,value]);
            setValue("");}

  return (
    <div>
      <div className="wrapper">
        <h1>TO Do List</h1>
      
        <div className="container">
            <div className="content">
                <div className="input-section">
                <input type="text"  className="input" onChange={handleChange} placeholder='Enter your task' value={value} />
                <button>ADD</button>
               
                </div>
          
                <p>{value}</p>
                <p>{task}</p>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default ToDoapp
