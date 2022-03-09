function reducer(prevState, action) {
  switch (action.type) {
    case "LoadTodos":
      return { ...prevState, todos: action.payload };
    case "addTodo":
      return { ...prevState, todos: prevState.todos.concat(action.payload) };
    case "deleteTodo":
      return {
        ...prevState,
        todos: prevState.todos.filter((todo) => todo.id !== action.payload.id),
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
