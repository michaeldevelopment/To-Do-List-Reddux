import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

import FocusLock from "react-focus-lock";

const ModalComponent = ({ show, setShow }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvent);

    return () => window.removeEventListener("keydown", handleKeyEvent);
  }, []);

  const handleKeyEvent = async (event) => {
    event.code === "Escape" ? await setShow(false) : null;
  };

  return (
    <Modal show={show} onHide={handleKeyEvent}>
      <FocusLock>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </FocusLock>
    </Modal>
  );
};

export default ModalComponent;
