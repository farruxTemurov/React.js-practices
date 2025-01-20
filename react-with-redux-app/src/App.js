import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import DisplayProducts from './components/DisplayProducts';

function App() {
  return (
    <div className="App">
      <h3>React With Redux App!</h3>
      <FirstComponent />
      <DisplayProducts />
    </div>
  );
}

export default App;
