import { useContext } from "react";
import { UserContext } from "./Context";

function DisplayUser() {

    let { users } = useContext(UserContext);
    return (
        <div>
            <h3>Display User</h3>
            {
                users.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {user.name}</h4>
                            <h4>Age: {user.age}</h4>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayUser;