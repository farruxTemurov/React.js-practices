import { useReducer, useEffect, useMemo, useRef } from "react";
import { todoReducer } from "./todoReducer";
import { clear } from "@testing-library/user-event/dist/clear";

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const completedCount = useMemo(() => todos.filter(todo => todo.done).length, [todos]);

    const filteredTodos = (searchTerm) =>
        todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

    return { todos, dispatch, completedCount, filteredTodos };
};
