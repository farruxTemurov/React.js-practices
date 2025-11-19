import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterPage from './pages/CounterPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CounterPage />} />
            </Routes>
        </Router>
    );

}

export default App;