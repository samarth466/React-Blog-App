import styles from "./Comments.module.css";

function Comment({comment}) {
    return (
        <li className={styles.comment}>
            <strong>{comment.name}</strong>
            {comment.email && (
                <p>Email:{" "}<a href=`mailto:${comment.email}`>comment.email</a></p>
            )}
            <p>{comment.body}</p>
        </li>
    );
}

export default Comment;