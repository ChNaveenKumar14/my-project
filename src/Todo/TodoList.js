import { useState } from "react"
import Add from "./add";
import Heading from "./heading";
import Input from "./input";
import Item from "./item";

const TodoList = props => {
    const [inputval, setInputval] = useState("");
    const [List, setlist] = useState([]);
    const handleChange = (value) => {
        setInputval(value);
    }
    const addList = () => {

        let tempList = [...List];
        let item = { value: inputval, rr: tempList.length }
        tempList.push(item);
        setlist(tempList);
        setInputval(" ");


    }
    const handleDelete = (nk) => {
        let tempList = [...List];
        tempList = tempList.filter((item, index) => {
            // if (i !== index) {
            //     return true
            // }
            // else {
            //     return false;
            // }
            return nk !== item.rr;
        })
        setlist(tempList);
        console.log('delete from main')
    }
    console.log(List)
    const update = (editText,index) => {
        let tempList=[...List];
        console.log(tempList);
        tempList=tempList.map(item=>{
            return item;
        }
            )
            setlist(tempList)
        console.log(editText,index)
    }
    return (
        <div>
            <Heading />
            <Input inputval={inputval} change={handleChange} />
            <Add add={addList} />
            {List.map(
                function (todo, i) {
                    return (
                        // <div key={i}>
                        //     <span>{todo.value}</span>
                        //     <button onClick={e => handleDelete(i)}>Delete</button>
                        // </div>
                        <Item key={i} todo={todo} del={handleDelete} update={update} />
                    )
                }
            )}
        </div>
    )
}
export default TodoList
