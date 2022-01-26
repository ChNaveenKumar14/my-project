import { connect } from "react-redux";
import { changeHeading, changeName } from "../reducers/action";

const Child=(props)=>{
    console.log(props)
    return(
        <>
        <div>{props.head}</div>
        <div>{props.Name1}in child</div>
        <button onClick={e=>props.change("newdata")}>change</button>
        <button onClick={e=>props.changeName("Rohan")}>changeName</button>
        </>
    )
}
const mapProps=(state)=>{
    return{
        head:state.main1.heading,
        Name1:state.main1.Name
     
    }
}
const matchDispatch=dispatch=>{
    return{
        change:function(data){
            dispatch(changeHeading(data))
    },
    changeName:function(data){
        dispatch(changeName(data))
}
   
    }
}

      
   
  
export default connect(mapProps,matchDispatch)(Child);