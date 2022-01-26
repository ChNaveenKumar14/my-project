

const Add = props => {
   const addList=()=>{
props.add()
   }
    return (
        <div>
            <button onClick={addList}>add</button>
          
        </div>
    )
}
export default Add