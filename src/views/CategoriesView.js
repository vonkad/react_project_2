import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';

class CategoriesView extends Component {
    render() {
        console.log("props="+JSON.stringify(this.props));
        const state = this.props.state;
        if (state==='ready') {
            const categories = this.props.categories.categories;
            return <div className="all-categories">{
                categories.map(category => <div className="categ" key={category.name}>{category.name}</div>)
            }</div>
        } else if (state==='loading') {
            return <div className='all-categories-waiting'>Loading</div>
        } else {
            console.log('Error. State=' + state);
            return <div className='all-categories-waiting'>Loading</div>
        }

    }
}

function mapStateToProps({categories}) {
    return categories;
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);