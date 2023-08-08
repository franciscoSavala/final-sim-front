import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login({ error = false }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = () => {
        const base64Credentials = btoa(`${username}:${password}`);
        sessionStorage.setItem("base64Data", base64Credentials);
        navigate("/simulation")
    }


    return (
        <div>
            {(error) ? <h4 className="h1 { color: red } ">Unauthorized</h4> : <span></span>}
            <form onSubmit={submitHandler}>
            <div>
                <label>USUARIO</label>
                <input onChange={(e) => {setUsername(e.target.value)}}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="password" onChange={(e) => {setPassword(e.target.value)}}></input>
            </div>
            <button type="submit">LOGIN</button>
        </form>
        </div>
        
    );
}


export default Login;