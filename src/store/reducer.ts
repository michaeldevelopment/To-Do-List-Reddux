import initialState from "./initialState";
import {initialStateType, reducerActions } from "../types"

function reducer(prevState:initialStateType = initialState, action: reducerActions):initialStateType {
  switch (action.type) {
    case "loadTodos": 
      return { ...prevState, todos: action.payload };
    case "addTodo":
      return { ...prevState, todos: prevState.todos.concat(action.payload) };
    case "deleteTodo":
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== action.payload.id),
        todosCompleted: prevState.todosCompleted.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    case "addCompletedTodo":
      return {
        ...prevState,
        todosCompleted: prevState.todosCompleted.concat(action.payload),
      };
    case "deleteCompletedTodo":
      return {
        ...prevState,
        todosCompleted: prevState.todosCompleted.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return prevState;
  }
}

export default reducer;
