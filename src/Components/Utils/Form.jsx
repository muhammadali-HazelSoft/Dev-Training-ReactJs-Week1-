import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addNewUser } from "../State/UserSlice";
import { getUserData } from "../State/UserSlice";

function DataForm(props) {
  const dispatch = useDispatch();
  const mockdata = useSelector((state) => state.user.value);
  const userId = Math.floor(Math.random() * 1000) + mockdata.lenght + 1;
  // const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");

  const addBtnHandler = () => {
    if (fname === "") {
      alert("First Name Required!!!");
    } else if (lname === "") {
      alert("Last Name Required!!!");
    } else if (email === "") {
      alert("Email Required!!!");
    } else {
      const newPersonData = {
        id: userId,
        first_name:fname,
        last_name:lname,
        email:email,
        gender:gender,
      };
      fetch("https://retoolapi.dev/AE760V/data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(newPersonData),
      }).then((result) => {
        dispatch(getUserData());
        console.log("Result:", { result });
      });
    }
  };
  return (
    <>
      <form action="#" onSubmit={props.onSubmit}>
        <div className="row">
          <div className="co-12 mt-2" id="firstName">
            <div className="row">
              <div className="col-6">
                <label htmlFor="fName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  className="form-control"
                  placeholder="first name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="lName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lName"
                  className="form-control"
                  placeholder="last name"
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-8 mt-2" id="lastName">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="youremail@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-4 mt-2" id="selectGender">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              name="gender"
              className="dropdown"
              id="gender"
              required
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male" className="dropdown-item">
                Male
              </option>
              <option value="Female" className="dropdown-item">
                Female
              </option>
              <option value="Bigender" className="dropdown-item">
                Bigender
              </option>
            </select>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary my-2"
          value="Submit"
          onClick={addBtnHandler}
        />
      </form>
    </>
  );
}

export default DataForm;
