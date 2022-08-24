import { deleteTodo, completedTodo } from "../store/actions";

export const handleDelete = (todo, dispatch) => {
  dispatch(deleteTodo(todo));
};

export const handleCheckbox = (e, todo, dispatch) => {
  dispatch(completedTodo(todo, e.target.checked));
};
