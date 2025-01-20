import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import DisplayProducts from './components/DisplayProducts';
import IncrementCounter from './components/IncrementCounter';
import DecrementCounter from './components/DecrementCounter';
import AddProducts from './components/AddProducts';

function App() {
  return (
    <div className="App">
      <h3>React With Redux App!</h3>
      {/* <FirstComponent />
      <IncrementCounter />
      <DecrementCounter /> */}
      <AddProducts />
      <DisplayProducts />
    </div>
  );
}

export default App;
