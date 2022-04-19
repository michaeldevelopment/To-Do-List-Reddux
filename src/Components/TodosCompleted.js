import LazyGirl from "../images/lazy.gif";

import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";

import { motion } from "framer-motion";

export default function TodosCompleted() {
  const todosCompleted = useSelector((state) => state.todosCompleted);

  const items = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Container>
      <h3>Tasks Completed</h3>
      {todosCompleted.length ? (
        todosCompleted.map((todo, i) => (
          <motion.li
            key={todo.id}
            className="list-unstyled my-2"
            variants={items}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.3, delay: i * 0.08 }}
            exit={{ opacity: 0 }}
          >
            {todo.name}
          </motion.li>
        ))
      ) : (
        <>
          <p>
            <strong>Hurry up and finish your tasks lazy!</strong>
          </p>
          <img src={LazyGirl} alt="lazy" />
        </>
      )}
    </Container>
  );
}
