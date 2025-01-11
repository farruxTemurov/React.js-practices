import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    let [email_id, setEmailId] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    let handleSubmit = (event) => {
        event.preventDefault();
        // here we are checking only one emailId and password but in real time 
        // we check with database using rest api calls with help of axios or fetch api

        if (email_id === "admin@gmail.com" && password === "admin@123") {
            alert("Successful Login!")
            navigate("/about-us")
        } else {
            alert("Failed, try once again")
        }
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email_id">EmailId:</label>
                <input type="email" name="email_id"
                    onChange={(event) => setEmailId(event.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"
                    onChange={(event) => setPassword(event.target.value)} /><br /><br />
                <input type="submit" value="Login" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    )
}

export default Login;