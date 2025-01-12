import { useState } from 'react';
import AddUser from './AddUser';
import './App.css';
import { UserContext } from './context'
import DisplayUser from './DisplayUser';

function App() {

  let [users, setUsers] = useState([])

  let displayUser = () => {
    console.log("Display User");
  }


  return (
    <UserContext.Provider value={{ users, displayUser, setUsers }}>
      <div className="App">
        <h2>Context API User Operations</h2>
        <AddUser />
        <DisplayUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;