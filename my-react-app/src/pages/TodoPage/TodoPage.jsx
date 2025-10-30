import { useState } from "react";
import { useTodos } from "./useTodos";
import TodoItem from "./TodoItem";

function TodoPage() {
    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { todos, dispatch, completedCount, filteredTodos } = useTodos();

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: newTodo.trim() });
        setNewTodo("");
    };

    const displayedTodos = filteredTodos(searchTerm);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo List</h1>
            <input
                style={{ margin: "15px" }}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search the list"
            />
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTodo}>Add</button>

            <p>You have completed {completedCount} of {todos.length} tasks!</p>

            <ul>
                {displayedTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default TodoPage;
