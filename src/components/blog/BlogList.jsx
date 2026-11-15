import BlogPost from "./BlogPost";

function BlogList({posts}) {
    return (
        <section aria-label="Blog posts">
            {posts.map((post) => (
                <BlogPost key={post.id} post={post}/>
            ))}
        </section>
    );
}

export default BlogList;