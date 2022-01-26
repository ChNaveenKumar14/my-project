import { useState,useEffect } from "react"

console.log("useEffect");
const Comp2=(props)=>{

useEffect(()=>{
console.log("function did mount")
return()=>{
    console.log("function did willlunmount") 
}
},[]);
useEffect(()=>{
    console.log("function did Update")
    })

console.log("Fun renering");
    return(
        <div>
            <h1>function</h1>
            <div>
                {props.prop4}
            </div>
        </div>
    )
}
export default Comp2