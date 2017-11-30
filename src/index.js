import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {compose, createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import {initCategories, loadPosts} from "./actions/index";
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware)
);

store.dispatch(initCategories());
store.dispatch(loadPosts());

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
