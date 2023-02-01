import "./post.css";
// import bmc from "../post/assets/bmc.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:3001/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt=""></img>
      )}
      <div className="postInfo">
        <div className="postCatContainer"></div>

        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
