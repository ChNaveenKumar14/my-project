import { Routes, Route } from "react-router-dom";
import EmpList from "./task/empList";
import Login from "./task/login";


const routes = () => {
  return  <Routes>
  <Route path="/" element={<Login />}>
    <Route path="about" element={<EmpList />} />
  </Route>
  </Routes>

}

