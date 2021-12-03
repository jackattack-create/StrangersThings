import React, {useState} from "react";
import { Post } from "../postItems";
import './posts.css'

const searchedPosts = (post, searchTerm) => {
  const lowerCaseSearch = searchTerm.toLowerCase();
  const {
    description,
    location,
    title,
    author: { username },
  } = post;

  const toMatch = [description, location, title, username];

  for (const field of toMatch) {
    if (field.toLowerCase().includes(lowerCaseSearch)) {
      return true;
    }
  }
}

const Posts = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const postsToDisplay = posts.filter((post) => searchedPosts(post, searchTerm));

  return (
    <main>
        <div className="search-tab">
            <input 
              type='text'
              value={searchTerm}
              onChange={(event) => {
                console.log(event.target.value);
                setSearchTerm(event.target.value);
              }}
            ></input>
            <button>Search</button>
        </div>
        <h1 className="searchTerm-title">
            {searchTerm}
          </h1>
        <div className="displayed-posts">
          
          {postsToDisplay.length ? (
          postsToDisplay.map((post) => (
            <Post post={post}/>
          ))
        ) : (
          <div>No posts to display</div>
        )}
        </div>
        
    </main>
  );
};

export default Posts;
