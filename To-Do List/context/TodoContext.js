import { createContext, useContext } from "react";

// Whatever things are needed on the page for completing all functions should be written here
export const TodoContext = createContext({
  // Property
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      complete: false, // Fixed incorrect reference
    },
  ],

  // Functions for working (methods for these functions are written in App.jsx)
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {}, // Fixed function name
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Hook
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider
export const TodoProvider = TodoContext.Provider;
