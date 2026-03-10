import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const { body } = post;
    return (
        <div>
            <h3>Post Details Here</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;