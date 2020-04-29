import React, {Component} from "react";
import './post-list-item.css';

export default class PostListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
        };
        this.onStarClickHandler = this.onStarClickHandler.bind(this);
        this.onLikeClickHandler = this.onLikeClickHandler.bind(this);
    }

    onStarClickHandler() {
        this.setState({important: !this.state.important});
    }

    onLikeClickHandler() {
        this.setState({like: !this.state.like});
    }


    render() {
        const {label, onDeleteHandler} = this.props;
        const {important, like} = this.state;
        let elementClassNames = 'post-list-item d-flex justify-content-between';
        if (important) elementClassNames += ' important';
        if (like) elementClassNames += ' like';

        return (
            <div className={elementClassNames}>
            <span className="post-list-item-label" onClick={this.onLikeClickHandler}>
                {label}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={this.onStarClickHandler}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDeleteHandler}
                        >
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}