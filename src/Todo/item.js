import { useState } from "react";
import Delete from "./delete"



const Item = (props) => {
    const [show, setShow] = useState(false);
    const [editText, setEditText] = useState("");
    const deleteItem = (jj) => {
        props.del(jj);
        console.log('delete from item')
    }
    const handleEdit = () => {
        setShow(true)
        setEditText(props.todo.value);
        
        
    }
    const save=()=>{
        setShow(false);
        props.update(editText,props.todo.id)
        setEditText("");
    }
    return (
        <div >
            {show ? <input value={editText} onChange={e=>setEditText(e.target.value)}/> : <span>{props.todo.value}</span>}
            {/* <button onClick={e => props.del(props.i)}>Delete</button> */}
            <Delete naveen={deleteItem} todo={props.todo} />
            {show ? <button onClick={save}>save</button> :<button onClick={handleEdit}>edit</button>}
        </div>
    )
}



export default Item