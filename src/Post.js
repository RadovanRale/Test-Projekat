import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="mt-2 text-gray-600">{post.body}</p>
    </div>
  );
};

export default Post;
