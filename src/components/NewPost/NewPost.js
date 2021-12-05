import React, {useState} from 'react'
import { callAPI } from '../../api';
import { useHistory, useParams } from 'react-router-dom';

import './newPost.css'

const NewPost = ({ token, setPosts, posts, action}) => {
    const history = useHistory()
    const {postId} = useParams()

    const isAnEdit = action === 'edit'
    const title = isAnEdit ? "edit title" : "What are you selling?";
    const buttonText = isAnEdit ? "Post edit" : "Post new item"
    const method = isAnEdit ? "PATCH" : "POST"
    const API_URL = isAnEdit ? `/posts/${postId}` : `/posts`

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        price: 0,
        location: '',
        willDeliver: false,
    });

    const handleChange = async (event) => {
        event.preventDefault()
        try {
          const {
                    data: post
                } = await callAPI({
                url: API_URL,
                method: method,
                body: {
                    post: {
                        title: newPost.title,
                        description: newPost.description,
                        price: newPost.price,
                        location: newPost.location,
                        willDeliver: newPost.willDeliver,
                    },
                },
                token,
            });
            
            if (isAnEdit) {
                const otherPosts = posts.filter((post) => post._id === postId)
                setPosts([...otherPosts, post])
            } else {
                setPosts([...posts, post])
            }

            history.push('/posts');
        } catch (error) {
            console.log('error adding your post', error)
        }

    }

    const handlePostFieldChange = (property) => (event) => {
        if (property === 'willDeliver') {
          setNewPost({ ...newPost, [property]: event.target.checked });
        } else {
          setNewPost({ ...newPost, [property]: event.target.value });
        }
      };

    return (
        <section >
            <div className="newPostPage">
            <h2>{title}</h2>
      <form onSubmit={handleChange}>
        <input
          type="text"
          placeholder="title"
          onChange={handlePostFieldChange('title')}
          value={newPost.title}
        ></input>
        <input
            className="newDescription"
          type="text"
          placeholder="description"
          onChange={handlePostFieldChange('description')}
          value={newPost.description}
        ></input>
        <input
          type="number"
          placeholder="price"
          onChange={handlePostFieldChange('price')}
          value={newPost.price}
        ></input>
        <input
          type="text"
          placeholder="location"
          onChange={handlePostFieldChange('location')}
          value={newPost.location}
        ></input>
        <label className="willDeliever">
          Deliver ? <input
            type="checkbox"
            onChange={handlePostFieldChange('willDeliver')}
            value={newPost.willDeliver}
          ></input>
        </label>
        <button>{buttonText}</button>
      </form>
            </div>
            
        </section>
    )
}

export default NewPost