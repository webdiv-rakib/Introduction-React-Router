import './Post.css'
import { Link, useNavigate } from "react-router";
const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="post-card">
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;