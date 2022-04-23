import { todos, todo } from "../types"

export const loadTodos = (todos: todos) => ({
  type: "loadTodos",
  payload: todos,
});
export const addTodo = (todo: todo) => ({ type: "addTodo", payload: todo });
export const deleteTodo = (todo: todo) => ({
  type: "deleteTodo",
  payload: todo,
});
export const completedTodo = (todo: todo, completedTodo: boolean) =>
  completedTodo
    ? {
        type: "addCompletedTodo",
        payload: todo,
      }
    : {
        type: "deleteCompletedTodo",
        payload: todo,
      };
