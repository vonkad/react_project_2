import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


class ListOfCategories extends Component {
    render() {
        const state = this.props.state;
        if (state==='ready') {
            const categories = this.props.categories.categories;
            return <ul className="all-categories-list">{
                categories.map(category => <li className="category-link" key={category.name}><Link to={`/category/${category.name}`}>{category.name}</Link></li>)
            }</ul>
        } else {
            return <div className='all-categories-waiting'>Loading ...</div>
        }

    }
}

function mapStateToProps({categories}) {
    return categories;
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCategories);