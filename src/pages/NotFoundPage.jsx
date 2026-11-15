import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <h1>404 — Page Not Found</h1>
      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/">Return to Blog Posts</Link>
    </section>
  );
}

export default NotFoundPage;