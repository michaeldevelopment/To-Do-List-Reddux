import React from "react";

import { useDispatch } from "react-redux";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { handleDelete, handleCheckbox } from "../todoActions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="checkbox"
        className="mx-2"
        onChange={(e) => handleCheckbox(e, todo, dispatch)}
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
          onClick={() => handleDelete(todo, dispatch)}
          className="mx-3"
        >
          ✗
        </Button>
      </OverlayTrigger>
    </>
  );
}
