import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes";

const initialState = {
  todo: [
    { id: Math.random(), name: "learn css", isdone: false },
    { id: Math.random(), name: "learn HTML", isdone: true },
  ],
};

const reducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state,todo:[...state.todo,payload] };
      case DELETE:
      return { ...state,todo:state.todo.filter(elt=>elt.id!==payload)};
    case COMPLETE:
        return{...state,todo:state.todo.map(elt=>elt.id===payload?{...elt,isdone:!elt.isdone}:elt)};
    case EDIT:
        return{...state,todo:state.todo.map(elt=>elt.id===payload.id?{...elt,name:payload.value}:elt)};
    default:
      return state;
  }
};
export default reducer