import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [adminCount, setAdminCount] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [salarySum, setSalarySum] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8081/adminCount")
      .then((res) => {
        setAdminCount(res.data[0].admin);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/employeeCount")
      .then((res) => {
        setEmployee(res.data[0].employee);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8081/salarySum")
      .then((res) => {
        setSalarySum(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className=" px-3 pt-2 pb-3 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <h5>Total: {adminCount}</h5>
        </div>
        <div className=" px-3 pt-2 pb-3 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <h5>Total: {employee}</h5>
        </div>
        <div className=" px-3 pt-2 pb-3 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <h5>Total($): {salarySum}</h5>
        </div>
      </div>
      {/* list of admins */}
      <div className=" mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
