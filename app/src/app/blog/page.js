import BlogPost from "../components/BlogPost";
import blogPosts from "../data/blogPosts";
import "../styles/Blog.module.css";

export default function Blog() {
  return (
    <section>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </section>
  );
}
