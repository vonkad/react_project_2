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
            return <div className="post-edit-component">{
                /// unmanaged form works great here
                posts.filter(post => post.id === postId).map(post =>
                    <form className="edit-post" onSubmit={this.handleSubmit}>
                        <label >
                            Title:
                            <input type="text" value={post.title}/>
                        </label>
                        <label>
                            Text:
                            <textarea value={post.body}/>
                        </label>
                    </form>
                )
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