import React, { useState } from 'react'
import Employee from './Employee';
import EmpList from "./empList"

const Login = () => {
const[user,Setuser]=useState("");
const[pwd,Setpwd]=useState("");
const[islogin,Setlogin]=useState(false)
const login=()=>{
if(user==="test"&&pwd==="test"){
    Setlogin(true)
}
}
  return (
    <>
  {!islogin &&  <div>
       <div> username:<input type="text" value={user} onChange={e=>Setuser(e.target.value)}/></div>
       <div> password:<input  value={pwd} onChange={e=>Setpwd(e.target.value)}/></div>
       <div><button onClick={login}>Login</button></div>
   </div>}
   
   {islogin && <div><Employee /></div>}
   <Employee/>
    </>
  )
}

export default Login