import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React!', important: true, id: 'Qwe'},
                {label: 'Thats cool!', important: false, id: 'Rty'},
                {label: 'fuck them all...', important: false, id: 'Uio'},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            return {
                data: [...before, ...after]
            }
        });
    }


    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDeleteHandler={this.deleteItem}
                />
                <PostAddForm/>
            </div>
        )
    }
};