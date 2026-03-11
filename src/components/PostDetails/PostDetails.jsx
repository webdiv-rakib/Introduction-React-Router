import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const { postId } = useParams();
    console.log(postId);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    const { body } = post;
    return (
        <div>
            <h3>Post Details Here</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;