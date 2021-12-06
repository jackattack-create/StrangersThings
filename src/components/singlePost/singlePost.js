import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { callAPI } from "../../api";

import "./singlePost.css";

const SinglePost = ({ posts, token, userData }) => {

  const History = useHistory()
  const { postId } = useParams();
  const post = posts.find((post) => postId === post._id);
  console.log("SINGLE POST", post);

  const deletePost = async (event) => {
    try {
      const { data: {post} } = await callAPI({
        url: '/posts/${postId}',
        method: "DELETE",
        token,
      });
    } catch (error) {
      console.log("error delteing post", error)
    }
    
  };

  const IsUserHere = userData.username === post.author.username;

  return (
    <>
      {post ? (
        <section className="singlePost">
          <div className="post-title">
            <h1 className="Single-name">{post.title}</h1>
            <h3 className="post-author">by {post.author.username}</h3>
            <>
              {IsUserHere ? (
                <button 
                onClick={(event) => {
                  deletePost(),
                  History.push('/post')
                }}>Delete post</button>
              ) : ''}
            </>
          </div>
          <div className="single-info">
            <h3>{post.price}</h3>
            <h3>{post.location}</h3>
            <h3>{post.willDeliver ? "Will Deliver" : "Pick up only"}</h3>
            <p className="singleDescription">{post.description}</p>
            <div className="postButtons">
              <>
              {IsUserHere ? (
                <Link to={`/posts/:postId/edit`}>
                <button>Edit Post</button>
                </Link>
              ) : ''}
              </>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default SinglePost;
