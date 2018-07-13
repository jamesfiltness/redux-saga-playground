import React from 'react';

const Posts = ({ onGetPosts, posts }) => {
    return (
      <div>
        <button onClick={onGetPosts}>
          Request Posts
        </button>
        {posts.map((post, i) => {
          return <h2 key={i}>{post.title}</h2>
        })}
      </div>
    );
}

export default Posts;
