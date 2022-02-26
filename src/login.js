import React, { useState } from 'react'

const Login = (props) => {
const[inp,Setinp]=useState("");
const[list,Setlist]=useState([])
const add=(e)=>{
  
let temp=[...list];
temp.push(inp);
Setlist(temp)
Setinp("");

}
const handleDelete=(i)=>{
    let temp=[...list];
    temp=temp.filter((item,index)=>{
        if(i!=index){
            return true
        }
    })
    Setlist(temp)
}
    return (
        <>
        <div>
        <input value={inp} onChange={e=>Setinp(e.target.value)}/>
        <button onClick={add}>add</button>
        </div>
        <div>
            {list.map((todo,i)=>{
                return(
                    <div key={i}>
                        <span>{todo}</span>
                        <button onClick={e => handleDelete(i)}>delete</button>
                        </div>
                )
            })}
            
        </div>
        </>
    )
}

export default Login