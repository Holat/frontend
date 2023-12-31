import {
  Employee,
  Home,
  Dashboard,
  Login,
  EmployeeEdit,
  Profile,
  AddEmployee,
  Start,
  EmployeeDetails,
  EmployeeLogin,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
          <Route path="/employeeEdit/:id" element={<EmployeeEdit />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/employeelogin" element={<EmployeeLogin />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
