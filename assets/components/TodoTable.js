import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoTable = () => {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState("");

  return (
    <form
      onSubmit={(e) => {
        context.createTodo(e,{ name: addTodo });
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                label="New Task"
                fullWidth={true}
                value={addTodo}
                onChange={(e) => setAddTodo(e.target.value)}
              />
            </TableCell>
            <TableCell align="right">
              <IconButton type="submit">
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
          {context.todos.map((todo, index) => (
            <TableRow key={"todo " + index}>
              <TableCell>{todo.name} </TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </form>
  );
};

export default TodoTable;
