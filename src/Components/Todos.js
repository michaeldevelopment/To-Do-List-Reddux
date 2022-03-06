import React, { useState } from "react";

import { TiDelete } from "react-icons/ti";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../store/actions";

export default function Todos() {
  const [checkedValue, setCheckedValue] = useState();
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(e, todo) {
    e.preventDefault();
    dispatch(deleteTodo(todo));
  }

  const handleCheckbox = (e, todo) => {
    setCheckedValue(e.target.checked);
    dispatch(completedTodo(todo, checkedValue));
  };

  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id} className="list-unstyled my-2">
          <TiDelete className="text-danger" />
          <input
            type="checkbox"
            className="mx-2"
            onChange={(e) => handleCheckbox(e, todo)}
          />
          {todo.name}
          <button onClick={(e) => handleDelete(e, todo)} className="mx-3">
            Eliminar tarea
          </button>
        </li>
      ))}
    </>
  );
}
