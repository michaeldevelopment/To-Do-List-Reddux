const ACTION_TYPES = {
  loadTodos: "loadTodos",
  addTodo: "addTodo",
  deleteTodo: "deleteTodo",
  addCompletedTodo: "addCompletedTodo",
  deleteCompletedTodo: "deleteCompletedTodo"
} as const

type ActionTypes = typeof ACTION_TYPES

export type todos = Array<{
  name: string,
  id: string
}>

export type todo = {
  name: string,
  id: string
}

interface dispatchActions {
  type: string
}

interface loadTodos extends dispatchActions {
  type: ActionTypes["loadTodos"]
  payload: todos
}

interface addTodo extends dispatchActions {
  type: ActionTypes["addTodo"]
  payload: todo
}

interface deleteTodo extends dispatchActions {
  type: ActionTypes["deleteTodo"]
  payload: todo
}

interface addCompletedTodo extends dispatchActions {
  type: ActionTypes["addCompletedTodo"] 
  payload: todo
}

interface deleteCompletedTodo extends dispatchActions {
  type: ActionTypes["deleteCompletedTodo"] 
  payload: todo
}

export type reducerActions = loadTodos | addTodo | deleteTodo | addCompletedTodo | deleteCompletedTodo

export type initialStateType = {
  todos: todos,
  todosCompleted: todos,
}
