import React, { useState } from "react"; // Fix: Import useState
import { useTodo } from "../context/TodoContext";



function TodoForm() {
    const [todo, setTodo] = useState(""); // State for the input field
    const { addTodo } = useTodo(); // Fix: Call useTodo() function

    const add = (e) => {
        e.preventDefault();

        if (!todo.trim()) return; // Prevent adding empty todos

        addTodo({ todo, completed: false }); // Add new todo with completed: false
 // Fix: Correct spelling of "completed"
        setTodo(""); // Clear input after adding
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;


