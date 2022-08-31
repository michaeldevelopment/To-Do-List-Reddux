import { useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";

import { loadTodos } from "../store/actions";

import { AnimatePresence, Reorder } from "framer-motion";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { handleDelete, handleCheckbox } from "../todoActions";

export default function Todos() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const items = {
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
            <Todo key={todo.id} todoName={todo.name}>
              <input
                type="checkbox"
                className="mx-2"
                onChange={(e) => handleCheckbox(e, todo, dispatch)}
              />
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
            </Todo>
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}
