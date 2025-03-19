import React from 'react';
import { render, screen } from '@testing-library/react';
import PostDetail from './PostDetail.jsx';
import { mockPosts, mockComments } from '../../mock/mockData';

jest.mock('../../mock/mockData', () => ({
    mockPosts: {
        id: "1",
        title: "What is your favorite programming language?",
        content: "I'm curious to know what language people prefer and why!",
        media: "../assets/mock_images/Frustrated Customer Service GIF.gif",
        author: {
            username: "user123",
            avatar: "../assets/mock_images/default_avatar.jpg"
        },
        subreddit: "programming",
        upvotes: 120,
        comments: 2,
        createdAt: "2025-03-19T12:00:00Z",
    },
    mockComments: [
        {
            id: "c1",
            postId: "1",
            author: {
                username: "coder99",
                avatar: "../assets/mock_images/default_avatar.jpg"
            },
            content: "I love Python because of its simplicity and versatility.",
            upvotes: 15,
            createdAt: "2025-03-19T13:00:00Z",
        },
        {
            id: "c2",
            postId: "1",
            author: {
                username: "js_fan",
                avatar: "../assets/mock_images/default_avatar.jpg"
            },
            content: "JavaScript is amazing for full-stack development!",
            upvotes: 20,
            createdAt: "2025-03-19T14:00:00Z",
        }
    ]
}));

test('renders post detail', () => {
    render(<PostDetail />);
    const postTitle = screen.getByText('What is your favorite programming language');
    expect(postTitle).toBeInTheDocument();
    const postContent = screen.getByText("I'm curious to know what language people prefer and why!");
    expect(postContent).toBeInTheDocument();
    const postAuthor = screen.getByText('user123');
    expect(postAuthor).toBeInTheDocument();
    const postSubreddit = screen.getByText('programming');
    expect(postSubreddit).toBeInTheDocument();
    const postUpvotes = screen.getByText('120');
    expect(postUpvotes).toBeInTheDocument();
    const postComments = screen.getByText('2');
    expect(postComments).toBeInTheDocument();
    const comment1 = screen.getByText('I love Python because of its simplicity and versatility.');
    expect(comment1).toBeInTheDocument();
    const comment2 = screen.getByText('JavaScript is amazing for full-stack development!');
    expect(comment2).toBeInTheDocument();
});