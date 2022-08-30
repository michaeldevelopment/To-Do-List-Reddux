import React from "react";

export default function Todo({ todo, children }) {
  return (
    <>
      <span className="todoItem">{todo.name}</span>
      {children}
    </>
  );
}
