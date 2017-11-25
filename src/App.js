import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './views/MainView';
// import './views/CategoryView';
// import './views/PostView';
// import './views/PostEdit';


class App extends Component {
  render() {
    return (
        <div className="app">
            <Route exact path="/" render={() => <MainView/>}/>
        </div>
    );
  }
}

export default App;

{/*<Route path="/category" render={() => <CategoryView/>}/>*/}
{/*<Route path="/post" render={() => <PostView/>}/>*/}
{/*<Route path="/editpost" render={() => <PostEdit/>}/>*/}
