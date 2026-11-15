import { Routes, Route } from "react-router";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import BlogPostsPage from "./pages/BlogPostsPage";
import IndividualPostPage from "./pages/IndividualPostPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={<BlogPostsPage />}
          />

          <Route
            path="/posts"
            element={<BlogPostsPage />}
          />

          <Route
            path="/posts/:postId"
            element={<IndividualPostPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;