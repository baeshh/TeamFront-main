/** @format */

import React, { useState } from 'react';
import Post from '../Post/Post';
import './Feed.css';

export default function Feed() {
  const [posts] = useState([
    {
      id: 1,
      username: 'john_doe',
      caption: 'A beautiful day!',
      imageUrl: 'https://via.placeholder.com/500',
    },
    {
      id: 2,
      username: 'jane_doe',
      caption: 'Having fun at the beach!',
      imageUrl: 'https://via.placeholder.com/500',
    },
  ]);

  return (
    <div className="feed">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
