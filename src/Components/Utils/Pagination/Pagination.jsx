import React from "react";
import { useSelector } from "react-redux";

function Pagination(props) {
  const mockData = useSelector((state)=> state.user.value);
  
  return (
    <>
      {/* label for current page from all  */}
      <span className="me-3">
        Page {props.currentPage} of {Math.ceil(mockData.length / props.rowsPerPage)}
      </span>

      {/* input for goto page */}
      <span>
        | Go to page{" "}
        <input
          type="number"
          min={1}
          max={Math.ceil(mockData.length / props.rowsPerPage)}
          value={props.currentPage}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            props.setCurrentPage(pageNumber + 1);
          }}
          className=" me-3"
          style={{ width: "50px" }}
        />
      </span>

      {/* previous button */}
      <button
        className="btn btn-sm btn-secondary me-md-3"
        onClick={() => props.setCurrentPage(props.currentPage - 1)}
        disabled={props.currentPage === 1}
      >
        {"<"}
      </button>

      {/* next button */}
      <button
        className="btn btn-sm btn-secondary me-md-3"
        onClick={() => props.setCurrentPage(props.currentPage + 1)}
        disabled={Math.ceil(mockData.length / props.rowsPerPage) === props.currentPage}
      >
        {">"}
      </button>
    </>
  );
}

export default Pagination;
