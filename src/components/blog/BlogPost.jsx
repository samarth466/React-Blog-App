import { Link } from "react-router";
import styles from "./BlogPost.module.css";

function BlogPost({ post }) {
  const preview = post.body.length > 120 ? `${post.body.slice(0, 120)}...` : post.body;
  return (
    <article className={styles.post}>
      <h2>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      <p>{preview}</p>
      <Link to={`/posts/${post.id}`} className={styles.readMore}>
        Read Full Post
      </Link>
    </article>
  );
}

export default BlogPost;