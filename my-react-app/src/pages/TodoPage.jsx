import { useEffect, useReducer, useState, useMemo } from "react";

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), text: action.payload, done: false }];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

function TodoPage() {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: newTodo.trim() });
        setNewTodo("");
    };

    const [searchTerm, setSearchTerm] = useState("");
    const filteredTodos = useMemo(() => {
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo List</h1>
            <input type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search the list"
            />
            <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.done ? "line-through" : "none",
                                cursor: "pointer"
                            }}
                            onClick={() =>
                                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                            }
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() =>
                                dispatch({ type: "DELETE_TODO", payload: todo.id })
                            }
                            style={{ marginLeft: "10px" }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoPage;
