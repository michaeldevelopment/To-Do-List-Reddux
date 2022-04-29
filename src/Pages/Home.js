import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";
import TodosCompleted from "../Components/TodosCompleted";

import { loadTodos } from "../store/actions";
import { useDispatch } from "react-redux";

import DocumentTitle from "react-document-title";

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

  // Puedo tambien manipular el DOM para cambiar el titulo de una pagina con document.title = xx...
  useEffect(() => {
    dispatch(loadTodos(allTodos));
    document.title = "Welcome again to Home";
  }, []);

  // El componente DocumentTitle me permite agregar diferentes titulos a las paginas de un Page en el DOM
  // Por ejemplo, para la pagina Home, voy a ver en la pestana un titulo que diga "Welcome to .."
  // Puedo agregar diferentes titulos segun sea la pagina
  return (
    <DocumentTitle title="Welcome to Home Page">
      <Container fluid>
        <Row>
          <Col lg={6} className="todosPending">
            <h3> ToDo List with Redux </h3>
            <TodoForm />
            <Todos />
          </Col>
          <Col lg={6} className="todosCompleted">
            <TodosCompleted />
          </Col>
        </Row>
      </Container>
    </DocumentTitle>
  );
}
