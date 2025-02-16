import React, { useEffect, useState } from 'react';
import Post from './Post';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        console.log("Ovo je response: ", response)
        const post = await response.json();
        console.log("Ovo je post: ", post)
      setPosts(post);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <p>DE SI JBT</p>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;