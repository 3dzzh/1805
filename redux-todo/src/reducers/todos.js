import shortId from "shortid";
import { ADD_TODO, COMPLETED_TODO, GET_TODOS } from "../constants/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: shortId(), todoText: action.todoText, isCompleted: false }
      ];
    case COMPLETED_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
      );
    case GET_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
