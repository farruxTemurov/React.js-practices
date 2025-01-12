import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
    let [email_id, setEmailId] = useState("");
    let [password, setPassword] = useState("");
    let [logins, setLogins] = useState([]);
    let [msg, setMessage] = useState("");
    let navigate = useNavigate();
    let url = "http://localhost:3000/logins";
    useEffect(() => {
        // axios.get(url).then(result=>console.log(result.data)).catch(error=>console.log(error));
        axios.get(url).then(result => setLogins(result.data)).catch(error => console.log(error));
    }, [msg])
    let handleSubmit = (event) => {
        event.preventDefault();
        let result = logins.find(ll => ll.email_id === email_id);
        if (result != undefined) {
            alert("Email already exists!");
            navigate("/")
        } else {
            let login = { email_id: email_id, password: password };
            axios.post(url, login).then(result => { alert("Account created successfully!"); setMessage(result) }).catch(error => console.log(error));
        }
    }
    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email_id">EmailId:</label>
                <input type="email" name="email_id"
                    onChange={(event) => setEmailId(event.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"
                    onChange={(event) => setPassword(event.target.value)} /><br /><br />
                <input type="submit" value="SignUp" />
                <input type="reset" value="Reset" />
            </form>
            <Link to="/">Login</Link>
        </div>
    )
}

export default SignUp;