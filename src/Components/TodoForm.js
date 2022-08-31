import { useState } from "react";
import { addTodo } from "../store/actions";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";

import { motion } from "framer-motion";

export default function TodoForm({ onSubmit }) {
  const [todoItem, setTodoItem] = useState();

  const items = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const handleInput = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: todoItem, id: Date.now() });
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <motion.h4 variants={items} initial="hidden" animate="show">
        Add a new task
      </motion.h4>
      {"  "}
      <Form.Control
        type="text"
        placeholder="Are u ready 4 a new task lazy buddy?"
        col="3"
        onChange={handleInput}
        className="w-50 text-center mx-auto"
      />
    </Form>
  );
}
