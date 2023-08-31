import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeEdit() {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/get/${id}`)
      .then((res) => {
        setData({
          ...data,
          name: res.data.result[0].name,
          email: res.data.result[0].email,
          address: res.data.result[0].address,
          salary: res.data.result[0].salary,
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/update/${id}`, data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/employee");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <h2>Update Employee</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className=" col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            disabled
          />
        </div>
        <div className=" col-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            disabled
          />
        </div>
        <div className=" col-12">
          <label htmlFor="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSalary"
            placeholder="Enter Salary"
            onChange={(e) => setData({ ...data, salary: e.target.value })}
            defaultValue={data.salary}
          />
        </div>
        <div className=" col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            disabled
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeEdit;
