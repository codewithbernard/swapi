import './SearchBar.css';
import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPeople } from '../../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.fetchData = _.debounce(this.fetchData, 500);
    this.state = {
      wikiSearchInput: ""
    }
  }

  handleInputChange = event => {
    const changedSearchTerm = event.target.value;
    this.setState({ wikiSearchInput: changedSearchTerm });
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchPeople(this.state.wikiSearchInput);
  }

  render() {
    return (
      <div className="row search-bar">
        <div className="input-field col s6 offset-s3">
          <i className="material-icons prefix">search</i>
          <input onChange={this.handleInputChange} placeholder="Start by typing your favourite character" id="wiki-search-input" type="text" />
          <label className="active" htmlFor="wiki-search-input">Star Wars character</label>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPeople })(SearchBar);
