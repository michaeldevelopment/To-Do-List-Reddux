import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../store/actions";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

export default function Todos() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(e, todo) {
    e.preventDefault();
    dispatch(deleteTodo(todo));
  }

  const handleCheckbox = (e, todo) => {
    dispatch(completedTodo(todo, e.target.checked));
  };

  return (
    <>
      {todoList.map((todo) => (
        <li key={todo.id} className="list-unstyled my-2">
          <input
            type="checkbox"
            className="mx-2"
            onChange={(e) => handleCheckbox(e, todo)}
          />
          {todo.name}

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
              ✗{" "}
            </Button>
          </OverlayTrigger>
        </li>
      ))}
    </>
  );
}
