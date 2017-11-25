const categoriesList = fetch(
    'http://localhost:3001/categories',
    {
        headers: {'Authorization': 'david-vonka'}
    }
).then(res => res.json());

const categoriesReducer = function (state = categoriesList, action) {
    return state;
};