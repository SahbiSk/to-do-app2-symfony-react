import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoTable = () => {
  const context = useContext(TodoContext);
  return (
    <div>
      {context.todos.map((e, i) => (
        <h1 key={i}>{e.task} </h1>
      ))}
    </div>
  );
};

export default TodoTable;
