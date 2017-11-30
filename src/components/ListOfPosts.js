import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


class ListOfPosts extends Component {
    render() {
        console.log(this.props);
        const state = this.props.state;
        const orderby = this.props.orderby;
        if (state==='ready') {
            const category = this.props.category;
            const isCategoryFilterSpecified = (typeof category === 'string') && category.trim().length>0;
            const posts = this.props.posts;
            return <table className="all-posts-list"><thead><tr><th>Title</th><th>Category</th><th>Author</th><th>Created</th><th>Excerpt</th><th>Votes</th></tr></thead><tbody>{
                posts.filter(post => !isCategoryFilterSpecified || post.category === category).sort(function(p1,p2) {return p2[orderby] - p1[orderby]}).map(post => <tr key={post.id}>
                    <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                    <td>{post.category}</td>
                    <td>{post.author}</td>
                    <td>{new Date(post.timestamp).toLocaleString()}</td>
                    <td>{post.body}</td>
                    <td>{post.voteScore}</td>
                </tr>)
            }</tbody></table>
        } else {
            return <div className='all-posts-waiting'>Loading ...</div>
        }

    }
}

function mapStateToProps({posts}) {
    return posts;
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPosts);