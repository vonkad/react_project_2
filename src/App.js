import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './views/MainView';
import MainView from './views/MainView'
import {Route} from "react-router-dom";
import CategoryView from "./views/CategoryView";
// import './views/CategoryView';
// import './views/PostView';
import PostEdit from './views/PostEdit';


export default class App extends Component {
  render() {
    return (
        <div className="app">
            <Route exact path="/" render={() => <MainView/>}/>
            <Route exact path="/category/:category" component={CategoryView}/>
            <Route exact path="/post/:postid" component={PostEdit}/>
        </div>
    );
  }
}

