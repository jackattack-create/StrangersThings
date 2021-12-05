import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { callAPI } from "../../api";

import './LogAndReg.css'

const Register = ({ setToken, setUserData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username, password);

    try {
      const data = await callAPI({
        url: `/users/register`,
        body: {
          user: {
            username,
            password,
          },
        },
        method: "POST",
      });
      console.log(data);

      const token = data?.data?.token;

      console.log(token);

      if (token) {
        localStorage.setItem("token", token);
        setUsername("");
        setPassword("");
        setToken(token);
        //this is the part that pushes you to a new page
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account">
      <form className="account-inputs" onSubmit={handleSubmit}>
        <h2>Make A New Account!</h2>
        <input
          type="text"
          placeholder="username"
          required
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
        <Link to={`/signIn`}>
          <button>Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
