import React, {Component} from 'react';
import '../App.css';
import ListOfPosts from "../components/ListOfPosts";
import SortingListOfPosts from "../components/SortingListOfPosts";
import AddAPostButton from "../components/AddAPostButton";
import {Link} from "react-router-dom";

export default class CategoryView extends Component {
    render() {
        const category = this.props.match.params.category;
        return <div>
            <Link to="/">Back to home</Link>
            <ListOfPosts category={category}/>
            <SortingListOfPosts/>
            <AddAPostButton category={category}/>
        </div>
    }
}