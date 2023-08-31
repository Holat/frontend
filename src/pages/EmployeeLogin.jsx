import React, { useState } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeLogin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/employeelogin", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          const id = res.data.id;
          navigate(`/employeeDetails/${id}`);
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  loginPage">
      <div className="p-3 rounded w-25 loginForm">
        <h2>Login</h2>
        <div className="text-danger">{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className=" mb-1">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className=" mb-1">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded">
            Log in
          </button>
          <div className="d-flex mt-2  align-items-center gap-3">
            <p className=" m-0">Do you agree to our policies</p>
            <input type="radio" className=" mt-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeLogin;
