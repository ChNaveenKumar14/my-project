import Login from "./task/login";
import { Route,Routes } from "react-router-dom";
import EmpList from "./task/empList";

function App() {
  

  return (
    <div className="container-fluid" style={{}}>
      <div className="row">
        {/* <div className="col">
         <Login />
        </div> */}
        <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="about" element={ <EmpList/> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
