import React, { useState } from "react";

const TodoItem = ({ todo, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = () => {
        dispatch({ type: "EDIT_TODO", payload: { id: todo.id, text: editedText } });
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
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
                    onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                >
                    {todo.text}
                </span>
            )}

            <button
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                style={{ margin: "0 10px" }}
            >
                Delete
            </button>

            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </li>
    );
};

export default TodoItem;
