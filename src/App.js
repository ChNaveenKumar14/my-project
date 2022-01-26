// import logo from './logo.svg';
// import './App.css';
//import Task from './paper';
import FunComp from './basics/FunComp';
import ClassComp from './basics/ClsComp';
import Comp1 from './basics/comp1';
import Comp2 from './basics/comp2';
import { useState } from 'react';

function App() {
  const [sname,setSname]=useState("lionel");
  const[show,setShow]=useState(true);
  const change=()=>{
setSname("messi");
  }
  const hide=()=>{
    setShow(!show)
  }
  return (
    <div className="App">
     {/* <Task /> */}
    
    

      <div style={{float:"left",width:"40%",height:"400px",border:"1px solid black"}}>
     <ClassComp prop1={"Rohan"}/>
     </div>
     <div style={{float:"left",width:"40%",height:"400px",border:"1px solid black",backgroundColor:"red"}}>
     <FunComp prop1={"Naveen"}/>
    </div>

    {show && <Comp1 prop3={sname}/>}
    {show && <Comp2 prop4={sname}/>}
     <button onClick={change}>change</button>
     <button onClick={hide}>hide</button>
    </div>
  );
}

export default App;
