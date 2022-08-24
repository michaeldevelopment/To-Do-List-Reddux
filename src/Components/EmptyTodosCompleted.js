import React from "react";

import LazyGirl from "../images/lazy.gif";

import { motion } from "framer-motion";

export default function EmptyTodosCompleted({ items }) {
  return (
    <>
      <motion.p variants={items} initial="hidden" animate="show">
        <strong>Hurry up and finish your tasks lazy!</strong>
      </motion.p>
      <img
        src={LazyGirl}
        alt="lazy"
        variants={items}
        initial="hidden"
        animate="show"
      />
    </>
  );
}
