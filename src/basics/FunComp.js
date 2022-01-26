import { useState } from "react"

const FunComp = (props) => {
    const [state, setState] = useState({
        name1: "naveen",
        age: 27,
        items: ["a", "b", "c"],
        obj: { a: 1, b: 2, c: 4 }

    });
    const [arr, setArr] = useState([{ key: "a", age: 122 },
    { key: "ab", age: 112 }
    ]);
    const [show, setShow] = useState(true)
    
    
    const change = () => {
        let newState = { ...state };
        newState.name1 = "spiderman";
        newState.age = 31
        newState.items.push("messi");
        newState.obj.a = "10";
        let newarr=[...arr];
        newarr.push({key:"a",age:30},{key:"c",age:27});

        setArr(newarr)
        setState(newState)
        setShow(!show)
    }


    return (
        <>
            <h1>Funcomp</h1>
            <div>{props.prop1}</div>
            <div>{state.name1}</div>
            <div>{state.age}</div>
            {!show && <div>showman</div>}
            <div>
                {state.items.map(item => {
                    return (
                        <div>{item}</div>
                    )
                })}
            </div>
            <div>{state.obj.a}</div>
            <div>{state.obj.b}</div>
            <div>{state.obj.c}</div>
            <div>{
                arr.map(function(item){
                    return(
                        <div key={item.age}>{item.key}:{item.age}</div>
                    )
                })
                }</div>
            <button onClick={change}>change</button>
        </>
    )
}

export default FunComp