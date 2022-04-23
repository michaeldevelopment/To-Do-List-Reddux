import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo, loadTodos } from "../store/actions";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { AnimatePresence, Reorder } from "framer-motion";

import { todo, initialStateType } from "../types";

export default function Todos() {
  const todoList = useSelector((state: initialStateType) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(
    e: React.MouseEvent<HTMLButtonElement>,
    todoItem: todo
  ) {
    e.preventDefault();
    dispatch(deleteTodo(todoItem));
  }

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    todoItem: todo
  ) => {
    dispatch(completedTodo(todoItem, e.target.checked));
  };

  type variantItems = {
    hidden: {
      opacity: number;
    };
    show: {
      opacity: number;
    };
  };

  const items: variantItems = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Reorder.Group
      values={todoList}
      onReorder={(todoList) => dispatch(loadTodos(todoList))}
    >
      <AnimatePresence>
        {todoList.map((todo, i) => (
          <Reorder.Item
            key={todo.id}
            className="list-unstyled listTodosPending my-2"
            variants={items}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.3, delay: i * 0.08 }}
            exit="hidden"
            value={todo}
            layoutId={todo.id}
          >
            <input
              type="checkbox"
              className="mx-2"
              onChange={(e) => handleCheckbox(e, todo)}
            />

            <span className="todoItem">{todo.name}</span>

            <OverlayTrigger
              key={todo.id}
              placement="right"
              overlay={
                <Tooltip id={todo.id} key={todo.id}>
                  Eliminar tarea
                </Tooltip>
              }
            >
              <Button
                variant="danger"
                onClick={(e) => handleDelete(e, todo)}
                className="mx-3"
              >
                ✗
              </Button>
            </OverlayTrigger>
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}
