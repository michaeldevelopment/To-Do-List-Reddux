import { useState } from "react";
import { addTodo } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";

export default function TodoForm() {
  const [todoItem, setTodoItem] = useState();
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInput = (e) => setTodoItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ name: todoItem, id: todoList.length + 1 }));
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <h4>Add a new task</h4>
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
  