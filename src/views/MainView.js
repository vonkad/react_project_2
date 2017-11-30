import React, {Component} from 'react';
import '../App.css';
import ListOfCategories from "../components/ListOfCategories";
import ListOfPosts from "../components/ListOfPosts";
import SortingListOfPosts from "../components/SortingListOfPosts";
import AddAPostButton from "../components/AddAPostButton";

export default class MainView extends Component {
    render() {
        return <div>
            <ListOfCategories/>
            <ListOfPosts/>
            <SortingListOfPosts/>
            <AddAPostButton/>
        </div>
    }
}