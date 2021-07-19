import React, { Component } from 'react';
import dataContext from '../context/dataContext';
import './shoppingList.css';

class ShoppingList extends Component {
    static contextType = dataContext;
    state = {  }
    render() { 
        return (
            <div className="ShoppingList">
                <div className="capture">
                    <input type="text"/>
                    <button onClick={this.handleAddtoList}>Add to do list</button>
                </div>

                <div className="list">
                    <h6>{this.props.prod.list}</h6>
                </div>
            </div>
        );
    }

    handleAddtoList = () => {
        this.context.addToShoppingList("The text from the input here");
    };
}
 
export default ShoppingList;

/**
 *
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */
