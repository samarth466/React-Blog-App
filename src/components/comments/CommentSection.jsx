import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import styles from "./Comments.module.css";

function CommentSection({ comments, onAddComment, loading = false, error = ""}) {
  return (
    <section className={styles.section}>
      <h2>Comments ({comments.length})</h2>
      {loading ? (
        <p role="status">Loading comments...</p>
      ) : error ? (
        <p className={styles.error} role="alert">{error}</p>
      ) : (
        <>
        <CommentForm onAddComment={onAddComment}/>
        <CommentList comments={comments}/>
        </>
      )}
    </section>
  );
}

export default CommentSection;