import React, { useState } from "react";
import axios from "axios";
import "./main.css"
function CreateUser() {
  const [username, setUsername] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: username,
    };

    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log(res.data));
  }
  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  return (
    <div className="main">
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
            placeholder="Enter a username"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
