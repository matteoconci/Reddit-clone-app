import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import PostList from './PostList.jsx';
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../../redux/slices/postSlice.js";
import { mockPosts, mockComments } from '../../mock/mockData.js';
import '@testing-library/jest-dom';



test('renders post detail', () => {
    const store = configureStore({
        reducer: { posts: postReducer },
        preloadedState: { 
            posts: { 
                posts: mockPosts, 
                comments: mockComments
            }
        }
      });
    render(
        <Provider store={store}>
            <PostList />
        </Provider>);

    const postTitle = screen.getByText('What is your favorite programming language?');
    expect(postTitle).toBeInTheDocument();
    const postContent = screen.getByText("I'm curious to know what language people prefer and why!");
    expect(postContent).toBeInTheDocument();
    const postAuthor = screen.getByText(/user123/i);
    expect(postAuthor).toBeInTheDocument();
    const postSubreddit = screen.getByText('r/programming');
    expect(postSubreddit).toBeInTheDocument();
    const postUpvotes = screen.getByText('120 upvotes');
    expect(postUpvotes).toBeInTheDocument();
    const postComments = screen.getByText('2 comments');
    expect(postComments).toBeInTheDocument();
    const comment1 = screen.getByText('I love Python because of its simplicity and versatility.');
    expect(comment1).toBeInTheDocument();
    const comment2 = screen.getByText('JavaScript is amazing for full-stack development!');
    expect(comment2).toBeInTheDocument();
});