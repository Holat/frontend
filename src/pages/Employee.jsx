import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Employee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/getEmployees")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to={"/addEmployee"} className="btn btn-success">
        Add Employee
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Address</th>
            <th>Email</th>
            <th>Salary($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>
                  {
                    <img
                      src={`http://localhost:8081/images/` + employee.image}
                      alt="user profile"
                      className=" employee-image"
                    />
                  }
                </td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>
                  <Link
                    to={`/employeeEdit/${employee.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
