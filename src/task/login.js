import React, { useState } from "react";
import Employee from "./Employee";
import EmpList from "./empList";

const Login = () => {
    const [user, Setuser] = useState("");
    const [pwd, Setpwd] = useState("");
    const [islogin, Setlogin] = useState(false);
    const login = () => {
        if (user === "test" && pwd === "test") {
            Setlogin(true);
        }
    };

    const handleLogout = () => {
        Setuser("");
        Setpwd("");
        Setlogin(false);
    };
    return (
        <>
            <div style={{padding:"50px"}}>
            {!islogin && (
                <div>
                    <div style={{padding:"10px"}}>
                        {" "}
                        <h6>username:</h6>
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => Setuser(e.target.value)}
                        />
                    </div>
                    <div style={{padding:"10px"}}>
                        {" "}
                       <h6> password:</h6>
                        <input type="password" value={pwd} onChange={(e) => Setpwd(e.target.value)} />
                    </div>
                    <div style={{padding:"10px"}}>
                        <button onClick={login}>Login</button>
                    </div>
                </div>
            )}

            {islogin && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <div className="row">
                            <div className="col">Employee Directory</div>
                            <div className="col">
                                <i className="fa" style={{ fontSize: "20px", margin: "5px" }} onClick={() => handleLogout()}>
                                    &#xf011;
                                </i>
                            </div>
                        </div>

                        <Employee />
                    </div>
                </div>
            )}
            
            </div>
        </>
    );
};

export default Login;