import React from "react";

export default function FocusElement() {
  // autoFocus y focus no funcionan con etiquetas tipo h2 o p, funcionan por ejemplo con etiquetas como input o button
  return <h2 autoFocus> Me has enviado </h2>;
}
