import React from "react";
import ReactDOM from "react-dom";
import TodoTable from "./components/TodoTable";
import TodoContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <TodoTable />
    </TodoContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
