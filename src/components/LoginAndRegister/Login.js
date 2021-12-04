import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { callAPI } from "../../api";

import './LogAndReg.css'

const AccountLogin = () => {

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
          history.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <div className="account">
          <form className="account-inputs" onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>
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
            <h3>New Here?</h3>
            <h3>Sign up here!</h3>
            <button>Register</button>
          </div>
        </div>
      );
}

export default AccountLogin;