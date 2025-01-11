import logo from './logo.svg';
import './App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h3>React Routing Example!</h3>

      <div>
        <Link to="/">Login</Link> |
        <Link to="/about-us">About Us</Link> |
        <Link to="/contact-us">Contact Us</Link> |
      </div>

      <hr />
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
