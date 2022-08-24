import { useSelector } from "react-redux";

import Todo from "./Todo";

import { loadTodos } from "../store/actions";

import { AnimatePresence, Reorder } from "framer-motion";

export default function Todos() {
  const todoList = useSelector((state) => state.todos);

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
            <Todo key={todo.id} todo={todo} />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}
