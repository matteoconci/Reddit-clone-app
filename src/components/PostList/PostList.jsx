import React, { useState } from 'react'
import './PostList.css';
import { mockPosts, mockComments } from '../../mock/mockData';
import Post from '../Post/Post';
import CommentList from '../CommentList/CommentList';

const PostList = () => {
  const [post] = useState(mockPosts);
  const [comments] = useState(mockComments);

  return (
    <div>
      {post.map((post) => {
        return (
          <Post 
            id={post.id}
            title={post.title}
            content={post.content}
            media={post.media}
            author={post.author.username}
            avatar={post.author.avatar}
            subreddit={post.subreddit}
            upvotes={post.upvotes}
            comments={post.comments}
            date={post.createdAt}
          />
        )
      })};
      <CommentList comments={comments} />
    </div>
  );
};

export default PostList;