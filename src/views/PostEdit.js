import React, {Component} from 'react';
import '../App.css';
import ListOfCategories from "../components/ListOfCategories";
import ListOfPosts from "../components/ListOfPosts";
import SortingListOfPosts from "../components/SortingListOfPosts";
import AddAPostButton from "../components/AddAPostButton";
import {connect} from "react-redux";

class PostEdit extends Component {

    render() {
        const postId = this.props.match.params.postid;
        const state = this.props.state;
        if (state==='ready') {
            const posts = this.props.posts;
            return <div>{
                posts.filter(post => post.id === postId).map(post => <div>{post.title}</div>)
            }</div>
        } else {
            return <div>Loading...</div>
        }
    }
}

function mapStateToProps({posts}) {
    return posts;
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);