import React from "react";


export default class comp1 extends React.Component{

componentDidMount(){
    console.log("class didmounting")
}
componentDidUpdate(){
    console.log("class did update");
}
shouldComponentUpdate(){
    return true
    console.log(" class shouldcomponent");
}
componentWillUnmount(){
    console.log("class willunmount");
}

render(){
    console.log("class renering");
    return<>
    <h1>class</h1>
    <div>{this.props.prop3}</div>
    </>
}
}