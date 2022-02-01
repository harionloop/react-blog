import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="post-img" src={PF + post.photo} alt="" />}

      <div className="post-info">
        <div className="post-cates">
          {post.categories.map((c) => (
            <span key={Math.random()} className="post-cate">
              {c.name}
            </span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="post-title">{post.title}</span>
        </Link>

        <hr />
        <span className="post-time">
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="post-desc">{post.desc}</p>
    </div>
  );
}
