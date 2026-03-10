import './Post.css'
import { Link } from "react-router";
const Post = ({ post }) => {
    const { id, title } = post;
    return (
        <div className="post-card">
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;