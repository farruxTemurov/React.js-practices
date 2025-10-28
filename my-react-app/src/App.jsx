import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterPage from './pages/counter-page';
import TodoPage from './pages/TodoPage';

const App = () => {
    return (
        <Router>
            <nav style={{ marginBottom: "20px" }}>
                <Link to="/">Counter</Link> |{" "}
                <Link to="/todo">Todo Page</Link> |{" "}
            </nav>

            <Routes>
                <Route path="/" element={<CounterPage />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </Router>
    );
}

export default App;