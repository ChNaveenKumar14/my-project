

const Delete=(props)=>{
const deleteItem=(rr)=>{
props.naveen(rr)
console.log('delete from delete')
}

return(
<button onClick={e=>deleteItem(props.todo.rr)}>Delete</button>
)
}
export default Delete