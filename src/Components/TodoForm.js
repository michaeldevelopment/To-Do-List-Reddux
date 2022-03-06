import React, { useState } from "react";
import { addTodo } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

export default function TodoForm() {
  const [todoItem, setTodoItem] = useState();
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInput = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ name: todoItem, id: todoList.length + 1 }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} />
        <input type="submit" hidden />
      </form>
    </>
  );
}
