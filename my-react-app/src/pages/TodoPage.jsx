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
        case "EDIT_TODO":
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        default:
            return state;
    }
};

function TodoPage() {

    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: newTodo.trim() });
        setNewTodo("");
    };

    const filteredTodos = useMemo(() => {
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [todos, searchTerm]);

    const startEditing = (todo) => {
        setEditingTodoId(todo.id);
        setEditedText(todo.text);
    };

    const handleSave = () => {
        dispatch({ type: "EDIT_TODO", payload: { id: editingTodoId, text: editedText } });
        setEditingTodoId(null);
        setEditedText("");
    };


    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo List</h1>
            <input style={{ margin: "15px" }} type="text"
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
                        {todo.id === editingTodoId ? (
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                        ) : (
                            <span
                                style={{
                                    textDecoration: todo.done ? "line-through" : "none",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                                }
                            >
                                {todo.text}
                            </span>
                        )}

                        <button
                            onClick={() =>
                                dispatch({ type: "DELETE_TODO", payload: todo.id })
                            }
                            style={{ margin: "4px 10px" }}
                        >
                            Delete
                        </button>

                        {todo.id === editingTodoId ? (
                            <button onClick={handleSave}>Save</button>
                        ) : (
                            <button onClick={() => startEditing(todo)}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoPage;
