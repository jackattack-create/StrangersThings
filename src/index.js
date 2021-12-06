import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import { AccountLogin, 
  Posts,
  SinglePost, 
  SiteHeader,
  Register,
  NewPost,
  Messages 
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

        <SiteHeader 
          token={token}
        />
        <Switch>
          <Route exact path="/">
            {userData.username && <div>Welcome Back {userData.username}</div>}
          </Route>
          <Route exact path="/posts">
            <Posts posts={posts}/>
          </Route>
            <Route path="/posts/:postId/edit">
              <NewPost
                token={token}
                setPosts={setPosts}
                posts={posts}
                action="edit"
              />
            </Route>
            <Route path="/posts/new">
             {token ? <NewPost 
                token={token}
                posts={posts}
                setPosts={setPosts}
                action="add"
              /> : ''
             }
            </Route>

            <Route path="/posts/:postId">
            <SinglePost 
              userData={userData}
              token={token}
              posts={posts}
            />
          </Route>
          
          <Route path="/register">
            <Register 
              setToken={setToken}
              setUserData={setUserData}
            />
          </Route>
          <Route path="/signIn">
            <AccountLogin 
              setToken={setToken}
              setUserData={setUserData}
            />
          </Route>
          <Route exact path='/messages'>
            <Messages 
              token={token}
              userData={userData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
