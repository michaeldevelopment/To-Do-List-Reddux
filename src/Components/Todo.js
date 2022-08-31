import React from "react";

export default function Todo({ todoName, children }) {
  return (
    <>
      <span className="todoItem">{todoName}</span>
      {children}
    </>
  );
}
