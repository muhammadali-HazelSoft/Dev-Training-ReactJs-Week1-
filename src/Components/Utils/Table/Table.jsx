import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import DataForm from "../Form";
import { useSelector, useDispatch } from "react-redux";
import {
  // delUserData,
  // removeUser,
  sortuserDataASC,
  sortuserDataDSC,
  sortuserDataWithIdASC,
  sortuserDataWithIdDSC,
} from "../../State/UserSlice";
import { Modal, Button } from "react-bootstrap";
import { FaSort, FaTrash } from "react-icons/fa";
import { getUserData } from "../../State/UserSlice";
// import { useEffect } from "react";
import "./Table.css";

function Table() {
  //mockdata from redux store
  const mockdata = useSelector((state) => state.user.value);
  // const rowsPerPage = useSelector((state) => state.user.value.usersPerPage);
  // const {rowsPerPage} = useSelector((state)=>state.user.value[200])
 
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOrder, setSortOrder] = useState("ASC");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  //show 10 rows perpage
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = mockdata.slice(indexOfFirstRow, indexOfLastRow);

  //Sorting Function for (first_name, last_name, email, gender)
  const sorting = (col) => {
    if (sortOrder === "ASC") {
      dispatch(sortuserDataASC(col));
      setSortOrder("DSC");
    }
    if (sortOrder === "DSC") {
      dispatch(sortuserDataDSC(col));
      setSortOrder("ASC");
    }
  };
  //Sorting With Id
  const idSorting = (col) => {
    if (sortOrder === "ASC") {
      dispatch(sortuserDataWithIdASC(col));
      setSortOrder("DSC");
    }
    if (sortOrder === "DSC") {
      dispatch(sortuserDataWithIdDSC(col));
      setSortOrder("ASC");
    }
  };
  //delete user
  const deleteHandler = (id) => {
    fetch(`https://retoolapi.dev/AE760V/data/${id}`, {
      method: "DELETE",
    }).then((result) => {
      dispatch(getUserData());
    });
  };
  return (
    <>
      {/* Modal */}
      <Modal show={show}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DataForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
      </Modal>

      <div id="table">
        {/* Search & Add Button */}
        <div className="float-end">
          {/*Button trigger modal for adding data to table*/}
          <Button variant="primary  me-3" onClick={handleShow}>
            Add
          </Button>

          {/* Searching Data */}
          <span>
            Search:{" "}
            <input
              type="search"
              name="search"
              id="search"
              className=" mb-3"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </span>
        </div>
        {/* Table */}
        <table className="table table-bordered">
          {/* table head */}
          <thead className="bg-info text-center">
            <tr>
              <th className="clikable" onClick={() => idSorting("id")}>
                ID
                <FaSort />
              </th>
              <th className="clikable" onClick={() => sorting("first_name")}>
                Fisrt Name
                <FaSort />
              </th>
              <th className="clikable" onClick={() => sorting("last_name")}>
                Last Name
                <FaSort />
              </th>
              <th className="clikable" onClick={() => sorting("email")}>
                Email
                <FaSort />
              </th>
              <th>Gender</th>
              <th>Delete</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody className="text-center">
            {currentRows
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.id.toString().includes(searchTerm.toString()) ||
                  val.first_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.last_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.gender.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((person, index) => (
                <tr key={index}>
                  <td>{person.id}</td>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.email}</td>
                  <td>{person.gender}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHandler(person.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/*pagination */}
        <div className="float-md-end">
          <Pagination
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            mockData={mockdata}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
