import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";
import TodosCompleted from "../Components/TodosCompleted";

import { loadTodos } from "../store/actions";
import { useDispatch } from "react-redux";

import { AnimatePresence } from "framer-motion";

export default function Home() {
  const dispatch = useDispatch();

  const allTodos = [
    {
      name: "Buy milk",
      id: 1,
    },
    {
      name: "Buy bread",
      id: 2,
    },
    {
      name: "Go to the doctor",
      id: 3,
    },
  ];

  useEffect(() => {
    dispatch(loadTodos(allTodos));
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className="todosPending">
            <h3>ToDo List with Redux</h3>
            <TodoForm />
            <AnimatePresence>
              <Todos />
            </AnimatePresence>
          </Col>
          <Col lg={6} className="todosCompleted">
            <AnimatePresence>
              <TodosCompleted />
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </>
  );
}
