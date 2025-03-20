import React from "react";
import styles from './Post.module.css';

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

const Post = ({id, title, content, media, author, avatar, subreddit, upvotes, comments, date}) => {
    return (
        <>
            <div className={styles.postList}>
                <div className={styles.topPost}>
                    <img src={avatar} style={{width: '20px'}}/>
                    <p>{author} · {timeSinceDate(date)}</p>
                    <p className={styles.subreddit}>{subreddit}</p>
                </div>
                <h3>{title}</h3>
                <p className={styles.content}>{content}</p>
                <img src={media}/>
                <div className={styles.bottom}>
                    <p>{upvotes} upvotes</p>
                    <p>{comments} comments</p>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default Post;