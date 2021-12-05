import React from "react";
import {useHistory} from 'react-router-dom'
import "./post.css";

const Post = ({post, history}) => {
  return (
    <div className="post" key={post._id}>
      <div className="post-nav">
        <h3>{post.title}</h3>
        <h4 className="post-auth">By {post.author.username}</h4>
      </div>
      <div className="post-info">
        <h3 className="post-price">{post.price}</h3>
        <p className="post-location">Where: {post.location}</p>
        <p>{
              post.willDeliever ? "Will Deliver" : "Pick up only"
          }</p>
        <p className="post-desc">{post.description}</p>
        <button
            onClick={() => history.push(`posts/${post._id}`)}
        >More info</button>
      </div>
    </div>
  );
};

export default Post;
