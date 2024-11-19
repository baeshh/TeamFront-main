/** @format */

import React from 'react';
import './Post.css';

export default function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <h3>{username}</h3>
      </div>
      <img className="post_image" src={imageUrl} alt="Post" />
      <h4 className="post_caption">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}
