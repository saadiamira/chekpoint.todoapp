import React from 'react'
import {useSelector} from "react-redux";
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
    const todo = useSelector(state => state.todo)
    return (
        <div>
            {todo.map((elt,index)=><TaskItem elt={elt} key={index}/>)}
        </div>
    )
}

export default TaskList
