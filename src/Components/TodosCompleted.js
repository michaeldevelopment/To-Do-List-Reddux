import React from "react";

import { useSelector } from "../Context/index";

import Container from "react-bootstrap/Container";

export default function TodosCompleted() {
  const todosCompleted = useSelector((state) => state.todosCompleted);
  return (
    <>
      <Container className="border border-primary">
        <h3> Tareas completadas </h3>
        {todosCompleted.length ? (
          todosCompleted.map((todo) => (
            <li key={todo.id} className="list-unstyled my-2">
              {todo.name}
            </li>
          ))
        ) : (
          <p>
            <strong>No hay tareas completadas </strong>
          </p>
        )}
      </Container>
    </>
  );
}
