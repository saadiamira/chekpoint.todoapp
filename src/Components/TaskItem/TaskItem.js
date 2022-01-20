import React from 'react'
import { useDispatch } from 'react-redux'
import { complete, deleteTask } from '../../redux/action'
import Edit from '../edit/Edit'
import './TaskItem.css'

const TaskItem = ({elt}) => {
   const dispatch= useDispatch();
    return (
        <div className='item'>
            <p className={elt.isdone?'line':""}>{elt.name}</p>
            <button className='done' onClick={()=>dispatch(complete(elt.id))}>{elt.isdone?"Undone":"Done"}</button>
            <button className='delet' onClick={()=>dispatch(deleteTask(elt.id))}>delete</button>
          <Edit elt={elt}/>
        </div>
    )
}

export default TaskItem
