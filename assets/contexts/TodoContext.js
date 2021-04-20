import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([{ task: "do something" }]);

  //create
  function createTodo() {}
  //read
  function readTodo() {}
  //update
  function updateTodo() {}
  //delete
  function deleteTodo() {}

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        readTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
