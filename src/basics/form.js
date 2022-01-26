import { useState } from "react"



const Form = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [IsLoggedIn, setIsLoggedIn] = useState(false);
    const changeName = (e) => {
        setUsername(e.target.value);
    }
    const changePwd = (e) => {
        setPassword(e.target.value);
    }
    const login = () => {
        if(username==="rohan" && password === "1234"){

            setIsLoggedIn(!IsLoggedIn);
        }
        console.log("pwd", username, password);
    }

    return (
        <>
        {
            !IsLoggedIn &&
            
        <div>
        <div>
            username:
            <input value={username} onChange={changeName} />
        </div>
        <div>
            password:
            <input value={password} onChange={changePwd} />
        </div>
        <button onClick={login}>login</button>
        </div>
        }
                {IsLoggedIn && <div>Login successfully</div>}
            
        </>
    )
}
export default Form