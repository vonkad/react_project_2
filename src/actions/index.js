export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const SORT_POSTS = 'SORT_POSTS';

export const categoriesRequested = () => ({type: CATEGORIES_REQUESTED});
export const categoriesReceived = (categories) => ({type: CATEGORIES_RECEIVED, categories});

export const postsRequested = () => ({type: POSTS_REQUESTED});
export const postsReceived = (posts) => ({type: POSTS_RECEIVED, posts});

export const sortPosts = (orderby) => ({type:SORT_POSTS, orderby});


/// this is thunk shit
export function initCategories() {
    return dispatch => {
        dispatch(categoriesRequested);

        return fetch(
            'http://localhost:3001/categories',
            {
                headers: {'Authorization': 'david-vonka'}
            }
        ).then(res => res.json(), error => console.log("Error while downloading list of categories", error))
            .then(json => dispatch(categoriesReceived(json)));
    };
}


export function loadPosts() {
    return dispatch => {
        dispatch(postsRequested);
        dispatch(sortPosts('voteScore'));

        return fetch(
            'http://localhost:3001/posts',
            {
                headers: {'Authorization': 'david-vonka'}
            }
        ).then(res => res.json(), error => console.log("Error while downloading list of posts", error))
            .then(json => dispatch(postsReceived(json)));
    };
}
