import React from 'react'

const Post = (props) => {
    return (
    <div className="post">
        <div className="post-nav">
            <h3>Post Title</h3>
        </div>
        <div className="post-image">
            <p>No Image Provided</p>
        </div>
        <div className="post-info">
            <h3>Price</h3>
            <h3>Location</h3>
        </div>
    </div>
    )
}

export default Post;