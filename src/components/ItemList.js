import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Item from './Item/Item';

class ItemList extends Component {
  renderSearchResults() {
    const searchResults = this.props.search;
    return _.map(searchResults, item => {
      return(
        <div key={item.name} className="col s3">
          <Item name={item.name} gender={item.gender} height={item.height} />
        </div>
      );
    })
  }

  renderEmptySearch() {
    const searchResults = this.props.search;
    if (searchResults.length === 0) {
      return(
        <div className="col s4 offset-s4 center-align teal-text text-darken-3">
          <p><i className="large material-icons">sentiment_dissatisfied</i></p>
          <p>Nothing was found for the given search criteria</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderSearchResults()}
        {this.renderEmptySearch()}
      </div>
    );
  }
}

const mapStateToProps = ({search}) => {
  return {
    search
  }
}

export default connect(mapStateToProps)(ItemList);
