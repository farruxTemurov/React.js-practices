import { useState } from 'react';
import AddUser from './AddUser';
import './App.css';
import { UserContext } from './Context'
import DisplayUser from './DisplayUser';

function App() {

  let [users, setUsers] = useState([])

  // let userOperation = (actionType,payload)=> {
  //   console.log("Parent component function called..");
  //   if(actionType=="ADD"){
  //     setUsers([...users,payload]);   //...users is previous state and payload is new state
  //     alert("User added successfully");
  //   }

  // }

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <h2>Context API User Operations</h2>
        <AddUser />
        <DisplayUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;