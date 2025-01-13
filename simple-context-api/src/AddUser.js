import { useContext, useState } from "react";
import { UserContext } from "./Context";

function AddUser() {
    let [name, setName] = useState("")
    let [age, setAge] = useState(0);

    //let {userOperation}= useContext(UserContext);
    let { users, setUsers } = useContext(UserContext);
    let addUser = (event) => {
        event.preventDefault();
        let user = { name, age };      // convert to object 
        //console.log(user);
        //1st parameter is action type and 2nd parameter is payload ie object 
        //userOperation("ADD",user);      // calling App component function from AddUser Component 
        setUsers([...users, user]);
        setName(""); // Clear the name input
        setAge(""); // Clear the age input
    }

    return (
        <div>
            <h3>Add User</h3>
            <form onSubmit={addUser}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} /><br /><br />
                <label>Age:</label>
                <input type="number" name="age" value={age} onChange={(event) => setAge(event.target.value)} /><br /><br />
                <input type="submit" value="Add User" /><br /><br />
            </form>
        </div>
    )
}

export default AddUser;