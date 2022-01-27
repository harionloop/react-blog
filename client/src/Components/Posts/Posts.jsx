import Post from "../Post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={Math.random()} post={p} />
      ))}
    </div>
  );
}
