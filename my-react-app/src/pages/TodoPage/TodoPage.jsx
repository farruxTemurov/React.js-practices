import { useState, useRef, useEffect } from "react";
import { useTodos } from "./useTodos";
import TodoItem from "./TodoItem";

function TodoPage() {
    const [newTodo, setNewTodo] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const { todos, dispatch, completedCount, filteredTodos } = useTodos();
    const completedRef = useRef(null);

    const addTodo = () => {
        if (newTodo.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: newTodo.trim() });
        setNewTodo("");
    };

    const displayedTodos = filteredTodos(searchTerm);

    useEffect(() => {
        if (!completedRef.current) return;
        const element = completedRef.current;

        element.style.transform = "scale(1.3)";
        element.style.opacity = "0.6";

        const timeout = setTimeout(() => {
            element.style.transform = "scale(1)";
            element.style.opacity = "1";
        }, 300);

        return () => clearTimeout(timeout);

    }, [completedCount]);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10 px-4 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-all duration-500">

                <h1 className="text-3xl font-bold mb-6 text-center tracking-tight">
                    📝 Todo List
                </h1>

                {/* Search bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search the list..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 transition"
                    />
                </div>

                {/* New task input */}
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter a new task"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-400 transition"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-green-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-600 active:scale-95 transition-transform shadow-sm"
                    >
                        Add
                    </button>
                </div>

                {/* Task stats */}
                <p className="text-gray-700 dark:text-gray-300 mb-5 text-center">
                    You have completed{" "}
                    <span
                        ref={completedRef}
                        className="inline-block font-semibold text-blue-600 dark:text-blue-400 transition-transform duration-300"
                    >
                        {completedCount}
                    </span>{" "}
                    of {todos.length} tasks!
                </p>

                {/* Todo list */}
                <ul className="space-y-3">
                    {displayedTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default TodoPage;
