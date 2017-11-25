import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {compose, createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer   /// note the single reducer. There will be reducer composition to solve the problem.
);


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
