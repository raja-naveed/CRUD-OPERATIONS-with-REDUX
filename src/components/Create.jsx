import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../UserReducer.jsx";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUserId = 1; // Default initial ID
    if (users && users.length > 0) {
      newUserId = users[users.length - 1].id + 1;
    }
    dispatch(addUser({ id: newUserId, name, email }));
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>{" "}
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
