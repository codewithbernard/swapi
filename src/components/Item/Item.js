import './Item.css';
import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { name, gender, height } = this.props;
    return (
      <div className="item-list-item card-panel teal darken-3 white-text">
        <h5>{name}</h5>
        <p>Gender: {gender}</p>
        <p>height: {height}</p>
      </div>
    );
  }
}

export default Item;
