import {CATEGORIES_RECEIVED, CATEGORIES_REQUESTED} from "../actions/index";

const categoriesReducer = function (state = {}, action) {
    if (action.type === CATEGORIES_REQUESTED) {
        state = {
            state:'loading'
        }
    } else if (action.type === CATEGORIES_RECEIVED) {
        state = {
            state:'ready',
            categories: action.categories
        }
    }
    return state;
};

export default categoriesReducer;