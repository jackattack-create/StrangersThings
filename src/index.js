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
Register } from "./components";

import { callAPI } from "./api";

const App = (props) => {

  const [posts, setPosts] = useState([])

const fetchPosts = async () => {
  const {
    data: { posts },
  } = await callAPI({
    url: '/posts',
  });
  return posts;
}

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
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="/signIn">
          <AccountLogin />
        </Route>

      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
