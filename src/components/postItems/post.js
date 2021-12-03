import React from "react";
import "./post.css";

const Post = ({post}) => {
  return (
    <div className="post" key={post.id}>
      <div className="post-nav">
        <h3>{post.title}</h3>
        <h4 className="post-auth">By {post.author.username}</h4>
      </div>
      <div className="post-info">
        <h3 className="post-price">{post.price}</h3>
        <p className="post-desc">{post.description}</p>
        <button>More info</button>
      </div>
    </div>
  );
};

export default Post;
