import React, { Component } from 'react';

import Header from './Header';
import SearchBar from './SearchBar/SearchBar';
import ItemList from './ItemList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
