import {POSTS_RECEIVED, POSTS_REQUESTED, SORT_POSTS} from "../actions/index";

const postsReducer = function (state = {}, action) {
    let newState = state;
    if (action.type === POSTS_REQUESTED) {
        newState = {
            state:'loading',
            orderby:state.orderby
        }
    } else if (action.type === POSTS_RECEIVED) {
        newState = {
            state:'ready',
            orderby:state.orderby,
            posts: action.posts
        }
    } else if (action.type === SORT_POSTS) {
        newState = {
            ...state,
            orderby: action.orderby
        }
    }
    return newState;
};

export default postsReducer;