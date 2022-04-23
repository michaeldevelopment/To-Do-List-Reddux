import React, { useState } from "react";
import { addTodo } from "../store/actions";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";

import { motion } from "framer-motion";

import { todo } from "../types";

export default function TodoForm() {
  // Al useState se le agrega un estado inicial, de manera que Typescript no lo reconozca inicialmente como undefined sino como
  // un string vacio
  const [todoItem, setTodoItem] = useState<string>("");
  const dispatch = useDispatch();

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoItem(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const task: todo = {
      name: todoItem,
      id: Date.now().toString(),
    };

    e.preventDefault();
    dispatch(addTodo(task));
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <motion.h4 variants={items} initial="hidden" animate="show">
        Add a new task
      </motion.h4>

      <Form.Control
        type="text"
        placeholder="Are u ready 4 a new task lazy buddy?"
        onChange={handleInput}
        className="w-50 text-center mx-auto"
      />
    </Form>
  );
}
