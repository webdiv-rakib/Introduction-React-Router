import { useLoaderData } from "react-router";
import Post from "../Post/Post";
import './Posts.css'
const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h3>Our All Users Posts</h3>
            <h4>Total Posts:{posts.length}</h4>
            <div className="posts-cards">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;