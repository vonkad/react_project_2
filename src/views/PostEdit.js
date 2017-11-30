import React, {Component} from 'react';
import '../App.css';
import ListOfCategories from "../components/ListOfCategories";
import ListOfPosts from "../components/ListOfPosts";
import SortingListOfPosts from "../components/SortingListOfPosts";
import AddAPostButton from "../components/AddAPostButton";

export default class PostEdit extends Component {

    render() {
        const postId = this.props.match.params.postid;
        return <div>
            {postId}
        </div>
    }
}