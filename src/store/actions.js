export const loadTodos = (todos) => ({ type: "LoadTodos", payload: todos });
export const addTodo = (todo) => ({ type: "addTodo", payload: todo });
export const deleteTodo = (todo) => ({ type: "deleteTodo", payload: todo });
export const completedTodo = (todo, checked) =>
  checked
    ? {
        type: "addCompletedTodo",
        payload: todo,
      }
    : {
        type: "deleteCompletedTodo",
        payload: todo,
      };
