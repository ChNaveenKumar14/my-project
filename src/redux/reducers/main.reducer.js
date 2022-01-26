


const main=(state,action)=>{
let temp={
    heading:"redux",
    Name:"Naveen"
}
if(action.type==="changeHeading1"){
    return{
        ...state,heading:action.payload
    }
}
if(action.type==="changeName1"){
    return{
        ...state,Name:action.payload
    }
}
return temp
}
export default main;