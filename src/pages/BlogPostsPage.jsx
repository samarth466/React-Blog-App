import {useEffect, useState} from "react";
import BlogList from "../components/blog/BlogList";

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts", {signal: controller.signal})
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load blog posts.");
      }
      return response.json();
    })
    .then(data => setPosts(data))
    .catch((error) => {
      if (error.name !== "AbortError") {
        setError("Unable to load blog posts. Please try again.");
      }
    })
    .finally(() => {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    });

    return () => controller.abort();
  }, []);
  return (
    <section>
      <h1>Blog Posts</h1>
      <p>
        Explore our latest articles about technology,
        creativity, and everyday life.
      </p>
      {loading ? (
        <p role="status">Loading blog posts...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : (
        <BlogList posts={posts}/>
      )}
    </section>
  );
}

export default BlogPostsPage;