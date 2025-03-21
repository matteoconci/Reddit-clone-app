import React from "react";
import styles from './Comment.module.css';

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

const Comment = ({ comment }) => {
    return (
        <>
            <div className={styles.commentList}>
                <div className={styles.topComment}>
                    <img src={comment.author.avatar} style={{width: '30px'}}/>
                    <p>{comment.author.username} · </p>
                    <p className={styles.date}>{timeSinceDate(comment.createdAt)}</p>
                </div>
                <p className={styles.content}>{comment.content}</p>
                <div className={styles.bottom}>
                    <p>{comment.upvotes} upvotes</p>
                </div>
            </div>
        </>
    );
};

export default Comment;