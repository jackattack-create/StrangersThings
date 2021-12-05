import React from 'react'
import {useParams} from 'react-router-dom'
import {callAPI} from '../../api'

import './singlePost.css'


const SinglePost = ({posts, token}) => {
    const {postId} = useParams()
    const post = posts.find((post) => postId === post._id);
    console.log('SINGLE POST', post); 

    const deletePost = async (event) => {

    }
    return( <>
    { post ? (<section className="singlePost">
            <div className="post-title">
                <h1 className="Single-name">{post.title}</h1>
                <h3 className="post-author">by {post.author.username}</h3>
               <> { token ? (
                   <button>Delete post</button>
               ): (
                   null
               )} </>
            </div>
            <div className="single-info">
                <h3>{post.price}</h3>
                <h3>{post.location}</h3>
                <h3>{
                    post.willDeliever ? "Will Deliver" : "Pick up only"
                }</h3>
                <p className="singleDescription">{post.description}</p>
            </div>
        </section>) : (
            ''
        )
    }
        </>
    )
}

export default SinglePost