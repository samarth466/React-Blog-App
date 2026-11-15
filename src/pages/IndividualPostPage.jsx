import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";
import CommentSection from "../components/comments/CommentSection";
import LikeButton from "../components/blog/LikeButton";
import styles from "../components/blog/BlogPost.module.css";

const API_URL = "https://jsonplaceholder.typicode.com";

function PostDetails({postId}) {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [postError, setPostError] = useState("");
  const [commentsError, setCommentsError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    function fetchJSON(url) {
      return fetch(url, {signal}).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      });
    }

    fetchJSON(`${API_URL}/posts/${postId}`)
    .then((postData) => {
      if (!postData.id) {
        throw new Error("Post not found.");
      }
      setPost(postData);
      return fetchJSON(`${API_URL}/users/${postData.userId}`);
    })
    .then(userData => setAuthor(userData))
    .catch((error) => {
      if (error.name !== "AbortError") {
        setPostError("Unable to load this blog post.");
      }
    })
    .finally(() => {
      if (!signal.aborted) {
        setPostLoading(false);
      }
    });

    fetchJSON(`${API_URL}/posts/${postId}/comments`)
    .then(data => setComments(data))
    .catch((error) => {
      if (error.name !== "AbortError") {
        setCommentsError("Unable to load comments.");
      }
    })
    .finally(() => {
      if (!signal.aborted) {
        setCommentsLoading(false);
      }
    });

    return () => controller.abort();
  }, [postId]);

  function addComment(name, body, email) {
    return fetch(
      `${API_URL}/posts/${postId}/comments`,
      {
        method: 'POST',
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          postId: Number(postId),
          name,
          body,
          email,
        }),
      },
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to submit comment.");
      }
      return response.json();
    })
    .then(newComment => setComments((previousComments) => [...previousComments, {...newComment, id: crypto.randomUUID()}]));
  }

  if (postLoading) {
    return <p role="status">Loading blog post...</p>;
  }

  if (postError || !post) {
    return (
      <section>
        <h1>Post Unavailable</h1>
        <p role="alert">{postError || "This post could not be found."}</p>
        <Link to="/posts">Back to Blog Posts</Link>
      </section>
    );
  }

  return (
    <article className={styles.post}>
      <Link to="/posts">Back to Blog Posts</Link>
      <h1>{post.title}</h1>
      {author && (
        <p className={styles.metadata}>By {author.name} {author.email && (
          <>
            {" | Email: "}<a href={`mailto:${author.email}`}>{author.email}</a>
          </>
        )}</p>
      )}
      <div className={styles.content}>
        {post.body}
      </div>
      <LikeButton/>
      <CommentSection comments={comments} onAddComment={addComment} loading={commentsLoading} error={commentsError}/>
    </article>
  );
}

function IndividualPostPage() {
  const { postId } = useParams();

  return <PostDetails key={postId} postId={postId}/>;
}

export default IndividualPostPage;