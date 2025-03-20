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

const Post = ({id, title, content, media, author, avatar, subreddit, upvotes, postComments, date, comments}) => {
    const filteredComments = comments.filter(comment => comment.postId === id);

    return (
        <>
            <div className={styles.postList}>
                <div className={styles.topPost}>
                    <img className={styles.avatar} src={avatar} style={{width: '30px'}}/>
                    <p>{author} · </p>
                    <p className={styles.date}>{timeSinceDate(date)}</p>
                    <p className={styles.subreddit}>r/{subreddit}</p>
                </div>
                <h3>{title}</h3>
                <p className={styles.content}>{content}</p>
                <img className={styles.media} src={media}/>
                <div className={styles.bottom}>
                    <p>{upvotes} upvotes</p>
                    <p>{postComments} comments</p>
                </div>
            </div>
            <div className={comments}>
                {filteredComments.length > 0 ? (
                        filteredComments.map((comment) => {
                            return (
                                <Comment 
                                   key={comment.id}
                                   author={comment.author.username}
                                   avatar={comment.author.avatar}
                                   content={comment.content}
                                   upvotes={comment.upvotes}
                                   date={comment.createdAt}
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