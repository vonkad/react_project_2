import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {sortPosts} from "../actions/index";


class SortingListOfPosts extends Component {
    render() {
        const {state, sortPosts} = this.props;
        if (state === 'ready') {
            const orderby = this.props.orderby;
            return <select id={"select-lop"} value={orderby} onChange={event => sortPosts(event.target.value)}>
                <option value="voteScore">Votes</option>
                <option value="timestamp">Created date</option>
            </select>
        } else {
            return '';
        }
    }
}

function mapStateToProps({posts}) {
    return {state: posts.state, orderby: posts.orderby};
}

function mapDispatchToProps(dispatch) {
    return {
        sortPosts: (orderby) => dispatch(sortPosts(orderby))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingListOfPosts);