import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/action'
import './AddTask.css'
const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
        
    }
    const handleAdd = () => {
        dispatch(addTask({id:Math.random(),name:text,isDone:false}));
        setText("");
    }
    
    return (
        <div className='add'>
            <input value={text} type="text"onChange={handleChange}></input>
            <button className='ad' onClick={()=>handleAdd()}>ADD</button>
        </div>
    )
}

export default AddTask
