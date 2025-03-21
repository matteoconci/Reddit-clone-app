import React from "react";
import styles from './Post.module.css';
import Comment from "../Comment/Comment";

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
                    <p>{post.upvotes} upvotes</p>
                    <p>{post.comments} comments</p>
                </div>
            </div>
            <div className={comments}>
                {filteredComments.length > 0 ? (
                        filteredComments.map((comment) => {
                            return (
                                <Comment 
                                   key={comment.id}
                                   comment={comment}
                                />
                            )
                        })
                ) : ( '' )}
            </div>
            <hr/>
        </>
    );
};

export default Post;