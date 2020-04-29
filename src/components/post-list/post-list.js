import React from "react";
import './post-list.css';

import PostListItem from "../post-list-item";

const PostList = ({posts}) => {

    const elements = posts.map((post) => {
        return (
            <li key={post.id} className="list-group-item">
                <PostListItem label={post.label} important={post.important} />
            </li>
        );
    });

    return (
        <ul className="post-list list-group">
            {elements}
        </ul>
    )
};

export default PostList;