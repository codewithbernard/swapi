import "./SearchBar.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions";

// Search form. After submitting new actions is called
class SearchBar extends Component {
  state = {
    wikiSearchInput: ""
  };

  handleInputChange = event => {
    const changedSearchTerm = event.target.value;
    this.setState({ wikiSearchInput: changedSearchTerm });
    if (!changedSearchTerm) {
      this.props.fetchData(changedSearchTerm);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchData(this.state.wikiSearchInput);
  };

  render() {
    return (
      <div className="row search-bar">
        <form onSubmit={e => this.handleSubmit(e)} className="col s12">
          <div className="input-field col s6 offset-s3">
            <i className="material-icons prefix">search</i>
            <input
              onChange={this.handleInputChange}
              placeholder="Start by typing your search term"
              id="wiki-search-input"
              type="text"
            />
            <label className="active" htmlFor="wiki-search-input">
              Search term
            </label>
          </div>
          <button className="btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchData })(SearchBar);
