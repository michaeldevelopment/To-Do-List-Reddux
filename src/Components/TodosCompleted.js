import LazyGirl from "../images/lazy.gif";

import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";

export default function TodosCompleted() {
  const todosCompleted = useSelector((state) => state.todosCompleted);
  return (
    <>
      <Container>
        <h3> Tasks Completed </h3>
        {todosCompleted.length ? (
          todosCompleted.map((todo) => (
            <li key={todo.id} className="list-unstyled my-2">
              {todo.name}
            </li>
          ))
        ) : (
          <>
            <p>
              <strong> Hurry up and finish your tasks lazy! </strong>
            </p>
            <img src={LazyGirl} alt="lazy" />
          </>
        )}
      </Container>
    </>
  );
}
