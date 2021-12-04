import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { AccountLogin, 
  Posts, 
  SiteHeader,
  Register 
} from "./components";

import { callAPI } from "./api";

const App = () => {

  const [posts, setPosts] = useState([])
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState({})

  const fetchUserData = async (token) => {
    const { data } = await callAPI({
      url: '/users/me',
      token,
    });
    return data;
  };

  const fetchPosts = async () => {
    const {
      data: { posts },
    } = await callAPI({
      url: '/posts',
    });
    return posts;
  }

  useEffect(async () => {
  
    if (!token) {
      setToken(localStorage.getItem('token'));
      return;
    }
    const data = await fetchUserData(token);
    if (data && data.username) {
      setUserData(data);
    }
  }, [token]);

  useEffect(async () => {
    const posts = await fetchPosts();
    setPosts(posts)

  }, [])

  return (
    <>
      <BrowserRouter>

        <SiteHeader />
        <Route exact path="/posts">
          <Posts posts={posts}/>
        </Route>
        <Route path="/register">
          <Register 
            setToken={setToken}
            setUserData={setUserData}
          />
        </Route>
        <Route path="/signIn">
          <AccountLogin />
        </Route>

      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
