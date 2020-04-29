import React from "react";
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info">Все</button>
            <button className="btn btn-outline-secondary">Понравившиеся</button>
        </div>
    )
};

export default PostStatusFilter;