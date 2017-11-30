import React, {Component} from 'react';
import '../App.css';
import Link from "react-router-dom/es/Link";

export default class AddAPostButton extends Component {
    render() {
        return <div className="add-a-post-component"><Link  to="/editpost">Add new post</Link></div>
    }
}