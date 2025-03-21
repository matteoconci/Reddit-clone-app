import React, { useState } from "react";
import styles from './Post.module.css';
import Comment from "../Comment/Comment";
import EmptyArrowUp from "../../assets/images/post/empty-up.svg";
import EmptyArrowDown from "../../assets/images/post/empty-down.svg";
import OrangeArrowUp from "../../assets/images/post/orange-up.svg";
import OrangeArrowDown from "../../assets/images/post/orange-down.svg";

function timeSinceDate(dateString) {
    const pastDate = new Date(dateString);
    const currentDate = new Date();
    const diffInMs = currentDate - pastDate;
    const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
    
    if (diffInHours >= 24) {
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
    }
    return `${diffInHours} h ago`.replace(".00", "");
};

const Post = ({ post, comments }) => {
    const [commentShown, setCommentShown] = useState(false);
    const [vote, setVote] = useState(null);
    const [numVotes, setNumVotes] = useState(post.upvotes);

    const handleComment = () => {
        setCommentShown(!commentShown);
    };

    const handleVote = (direction) => {
        if (direction === vote) {
            setVote(null)
            setNumVotes(prev => direction === 'up' ? prev - 1 : prev + 1)
        } else {
            let change = 0;

            if (vote === null) {
                change = direction === 'up' ? 1 : -1;
              } else if (vote === 'up' && direction === 'down') {
                change = -2;
              } else if (vote === 'down' && direction === 'up') {
                change = 2;
              };
            
            setVote(direction);
            setNumVotes(prev => prev + change);
        };
    };

    const filteredComments = comments.filter(comment => comment.postId === post.id);

    return (
        <>
            <div className={styles.postList}>
                <div className={styles.topPost}>
                    <img className={styles.avatar} src={post.author.avatar} style={{width: '30px'}}/>
                    <p>{post.author.username} · </p>
                    <p className={styles.date}>{timeSinceDate(post.createdAt)}</p>
                    <p className={styles.subreddit}>r/{post.subreddit}</p>
                </div>
                <h3>{post.title}</h3>
                <p className={styles.content}>{post.content}</p>
                <img className={styles.media} src={post.media}/>
                <div className={styles.bottom}>
                    <div className={styles.upvotes}>
                        <img className={styles.arrow} src={vote === 'up' ? OrangeArrowUp : EmptyArrowUp} onClick={() => handleVote('up')} alt="arrow"/>
                        <p>{numVotes}</p>
                        <img className={styles.arrow} src={vote === 'down' ? OrangeArrowDown : EmptyArrowDown} onClick={() => handleVote('down')} alt="arrow"/>
                    </div>
                    <p style={{ cursor: 'pointer' }} onClick={handleComment}>{post.comments} comments</p>
                </div>
            </div>
            <div className={comments}>
                {commentShown && filteredComments.length > 0 && (
                    filteredComments.map((comment) => (
                        <Comment 
                        key={comment.id}
                        comment={comment}
                        />   
                    ))
                )}
            </div>
            <hr/>
        </>
    );
};

export default Post;