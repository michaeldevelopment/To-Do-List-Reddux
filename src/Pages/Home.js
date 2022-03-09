import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Loader from "../Components/Loader";
import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";
import TodosCompleted from "../Components/TodosCompleted";

import { useDispatch } from "../Context/index";
import { loadTodos } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();

  const allTodos = [
    {
      name: "Comprar la leche",
      id: 1,
    },
    {
      name: "Comprar el pan",
      id: 2,
    },
    {
      name: "Ir al doctor",
      id: 3,
    },
  ];

  useEffect(() => {
    dispatch(loadTodos(allTodos));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Loader />
            <TodoForm />
            <Todos />
          </Col>
          <Col>
            <TodosCompleted />
          </Col>
        </Row>
      </Container>
    </>
  );
}
