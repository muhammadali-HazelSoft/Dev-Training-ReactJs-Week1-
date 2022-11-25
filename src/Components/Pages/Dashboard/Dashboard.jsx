import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../Styles/Sidebar.styled";
import Table from "../../Utils/Table/Table";
import { FaTh, FaSignOutAlt } from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <Sidebar>
            <ul className="navbar-nav p-0 m-0">
              <h3 className="mx-3 my-3 d-none d-xl-block">Admin Dashboard</h3>
              <li className="nav-item px-3 w-100 mx-0 mt-5">
                <NavLink
                  to="/dashboard"
                  className="nav-link text-decoration-none text-white"
                >
                  <FaTh className="mb-2 me-3" />
                  <span className="d-none d-md-inline-block">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item px-3 w-100">
                <NavLink
                  to="/"
                  className="nav-link text-decoration-none text-white"
                >
                  <FaSignOutAlt className="mb-2 me-3" />
                  <span className="d-none d-md-inline-block">Logout</span>
                </NavLink>
              </li>
            </ul>
          </Sidebar>
        </div>
        <div className="col-8 pt-5 ms-5">
          <Table />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
