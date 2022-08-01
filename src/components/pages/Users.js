import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form";

const Users = () => {
  return (
    <div>
      <div className="row mt-4 justify-content-center">
        <div className="col-3">
          <h5 className="text-center pb-4">Edit User</h5>
          <form>
            <Form/>
            <button className="btn btn-primary d-grid mx-auto w-100 mt-2">
              Submit
            </button>
          </form>
        </div>

        <div className="col-7">
          <h5 className="text-center">User List</h5>
          <table className="table table-sm table-striped table-hover">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Middle Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Extension Name</th>
                <th scope="col">Gender ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th scope="row">1</th>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>
                  <Link className="btn btn-sm btn-primary" to="/edit">
                    Edit
                  </Link>
                  <Link className="btn btn-sm btn-danger" to="/delete">
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
