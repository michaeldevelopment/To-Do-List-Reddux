import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";
import TodoCompletedList from "../Components/TodoCompletedList";

import { loadTodos } from "../store/actions";
import { useDispatch } from "react-redux";

import { allTodos } from "../data/data";
import { motion } from "framer-motion";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos(allTodos));
  });

  const handleSubmitForm = (todoObject) => {
    dispatch(addTodo(todoObject));
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="todosPending">
            <motion.h3
              initial={{ opacity: 0, rotate: 15 }}
              animate={{ opacity: 1, rotate: 0 }}
            >
              ToDo List with Redux
            </motion.h3>
            <TodoForm onSubmit={handleSubmitForm} />

            <TodoList />
          </Col>
          <Col lg={6} className="todosCompleted">
            <TodoCompletedList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
