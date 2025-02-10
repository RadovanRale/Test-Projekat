import React, { useEffect, useState } from 'react';
import Post from './Post';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let allPosts = [];
      for (let i = 1; i <= 100; i++) {
        const response = await fetch(`/path/to/json/files/post-${i}.json`);
        const post = await response.json();
        allPosts.push(post);
      }
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;