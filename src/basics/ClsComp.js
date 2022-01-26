import React from "react"

class ClassComp extends React.Component{
    state={
        Name:"vinay",
        age:24,
        show:true,
        items:["a","b","c"],
        obj:{a:1,b:2,c:4},
       
    }

    change=()=>{
        let newitems=[...this.state.items];
        newitems.push(46);
        let newObj={...this.state.obj}
        newObj.a=25;

     this.setState({Name:"akshaya",age:7,items:newitems,obj:newObj});
    }
    
   render(){
       return(
           <>
           <div><h1>ClassComp</h1></div>
          <div style={{fontSize:"20px",color:"orange"}}><h1>{this.props.prop1}</h1></div>
          <div>{this.state.Name}</div>
          <div>{this.state.age}</div>
          {!this.state.show && <div>hidden</div>}
        <div>
            {this.state.items.map(item=>{
                return <div>{item}</div>
            })}
        </div>
        <div>{this.state.obj.a}</div>
        <div>{this.state.obj.b}</div>
        <div>{this.state.obj.c}</div>
        <button onClick={this.change}>change</button>
           </>
       )
       }
}

export default ClassComp