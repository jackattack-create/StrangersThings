import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="account">
      <form className="account-inputs" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit">Register</button>
      </form>
      <div className="other-box">
        <h3>Already a user?</h3>
        <h3>Sign in here!</h3>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Register;
