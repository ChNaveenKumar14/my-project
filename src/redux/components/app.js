import { connect } from "react-redux";
import Child from "./child";

const App=(props)=>{
    console.log(props)
    return(
        <>
        
        <div>{props.list[0]}</div>
        <div>{props.Name1} in app</div>
        <Child />
        </>
    )
}
const mapProps=(state)=>{
    return{
        list:state.list1.list,
        Name1:state.main1.Name
    }
}
export default connect(mapProps)(App);