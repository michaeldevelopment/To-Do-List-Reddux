import React, { useEffect, useState, useRef, Fragment } from "react";
import FocusElement from "../Components/FocusElement";
import ModalComponent from "../Components/ModalComponent";

import Button from "react-bootstrap/Button";

import FocusLock from "react-focus-lock";

export default function Focus() {
  const [tooltip, setTooltip] = useState(false);
  const [show, setShow] = useState(false);
  const [formShow, setFormShow] = useState(false);
  const focusedContent = useRef(null);
  const focused = useRef(null);

  useEffect(() => {
    document.title = "Welcome to Focus Page";
    focusedContent.current.focus();
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormShow(true);
  };

  const handleFocus = (e) => {
    e.preventDefault();
  };

  // .focus() solo funciona con algunas etiquetas como por ejemplo los input, pero no con los textos

  // Junto con el ref, es posible setear la pagina de manera que haga el focus partiendo de un elemento HTML en especifico
  // Lo puedo poner donde YO QUIERA, EN CUALQUIER ETIQUETA.. Sin el tabIndex NO FUNCIONA !!!!

  // tabIndex indica el orden en el que se le hace focus con el tab a los elementos HTML.
  // 1 va primero, 0 segundo, etc.
  return (
    <FocusLock>
      <Fragment>
        <h1 ref={focusedContent} tabIndex="0">
          Welcome to the focus page!
        </h1>
        {formShow ? (
          <FocusElement />
        ) : (
          <form role="form">
            <input />
            <button onClick={handleSubmitForm}> Submit me please </button>
          </form>
        )}

        <form>
          <input tabIndex="1" ref={focused} />
          <button id="pageFocus" onClick={handleFocus}>
            Make input focus
          </button>
        </form>

        <Button role="button" onClick={() => setShow(true)}>
          Click to Open the modal
        </Button>
        <ModalComponent role="modal" show={show} setShow={setShow} />

        <button
          onFocus={() => setTooltip(true)}
          onBlur={() => setTooltip(false)}
        >
          Focus me to see tooltip!
        </button>
        {tooltip && <p> You are focusing on me! </p>}
      </Fragment>
    </FocusLock>
  );
}
