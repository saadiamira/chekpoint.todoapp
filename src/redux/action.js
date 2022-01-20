import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

export const addTask = (payload) => ({
    type: ADD,
    payload//newTask
})
export const complete = (payload) => ({
    type: COMPLETE,
    payload//id
})
export const deleteTask = (payload) => ({
    type: DELETE,
    payload //id
}) 
export const edit = (id,value) => ({
    type: EDIT,
    payload:{id,value} //value,id
})


