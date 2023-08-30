import React from "react";

function Home() {
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className=" px-3 pt-2 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <p>Admin</p>
          </div>
          <hr />
          <p>Total: {}</p>
        </div>
        <div className=" px-3 pt-2 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <p>Employee</p>
          </div>
          <hr />
          <p>Total: {}</p>
        </div>
        <div className=" px-3 pt-2 border shadow-sm rounded w-25">
          <div className="text-center pb-1">
            <p>Salary</p>
          </div>
          <hr />
          <p>Total: {}</p>
        </div>
      </div>
      {/* list of admins */}
      <div className=" mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <th>
              <th>Email</th>
              <th>Action</th>
            </th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
