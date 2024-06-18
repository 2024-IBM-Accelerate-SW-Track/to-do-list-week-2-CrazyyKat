import React from "react";
import "../component/todos.css";
import "../pages/Home.js"
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox } from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{marginTop:10}}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
            
            {/* replaced the CardContent with a ListItemButton and ListItemText */}
            {/* <CardContent>
              <span style={{ padding: "50px" }}>{todo.content}</span>
            </CardContent> */}

            <ListItemButton component="a" href="#simple-list">
              {/* attributes are not seperated by commas */}
                {/* <Checkbox style={{paddingLeft:0}} color={primary}/> */}
                
                {/* added an onClick eventListener */}
                <Checkbox onClick={() => this.deleteTodo(this.id)} style={{paddingLeft:0}} color={{primary:'lightblue'}}/>

                <ListItemText primary={todo.content} secondary={todo.date}/>
            </ListItemButton>

          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
