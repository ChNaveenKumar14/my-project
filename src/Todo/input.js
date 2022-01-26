import { useState } from "react";


const Input = props => {
    // const [data,setData]=useState("naveen");
    const handleChange = (e) => {
        console.log(e.target.value);
        props.change(e.target.value);
        // props.naveen(data)
    }
    return (
        <div>
            <input value={props.inputval} onChange={handleChange}/>
          
        </div>
    )
}
export default Input