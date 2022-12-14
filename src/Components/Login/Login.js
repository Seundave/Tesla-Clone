import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();
const [username, setusername] = useState("");
const [password, setpassword] = useState("");
const [authenticated, setAuthenticated] = useState(
localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ username: "Jane", password: "testpassword"}];
const handleSubmit = (e) => {
e.preventDefault();
const account = users.find((user) => user.username === username);
if (account && account.password === password) {
    setAuthenticated(localStorage.setItem("authenticated", true))
    navigate("/shop");
}
};
return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            />
            <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
);
};

export default Login