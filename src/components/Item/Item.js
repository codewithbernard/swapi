import "./Item.css";
import React, { Component } from "react";

class Item extends Component {
  render() {
    const { name, gender, height } = this.props;
    return (
      <div className="item-list-item card-panel teal darken-3 white-text">
        <h5>{name}</h5>
      </div>
    );
  }
}

export default Item;
