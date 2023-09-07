import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../UserReducer.jsx";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === parseInt(id));
  const { name, email } = user;
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating user:", { id, name: uname, email: uemail }); // Log the payload
    dispatch(updateUser({ id, name: uname, email: uemail }));
    console.log("Updated user:", users); // Log the updated state
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
              value={uemail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>{" "}
          <br />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
