import React, { useState } from 'react'
import './PostList.css';
import { mockPosts, mockComments } from '../../mock/mockData';
import Post from '../Post/Post';

const PostList = () => {
  const [post] = useState(mockPosts);
  const [comments] = useState(mockComments);

  return (
    <div>
      {post.map((post) => {
        return (
          <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            media={post.media}
            author={post.author.username}
            avatar={post.author.avatar}
            subreddit={post.subreddit}
            upvotes={post.upvotes}
            postComments={post.comments}
            date={post.createdAt}
            comments={comments}
          />
        )
      })};
    </div>
  );
};

export default PostList;