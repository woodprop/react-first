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
                {label: 'Going to learn React!', important: true, id: 1},
                {label: 'Thats cool!', important: false, id: 2},
                {label: 'fuck them all...', important: false, id: 3},
            ]
        };
        this.nextId = 4;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
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

    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            id: this.nextId++,
        };
        this.setState(({data}) => {
            return {
                data: [newItem, ...data]
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
                <PostAddForm
                    onAddHandler={this.addItem}
                />
            </div>
        )
    }
};