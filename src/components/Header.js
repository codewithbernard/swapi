import React, { Component } from "react";

// Dummy header
class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <a href="/" className="brand-logo center">
            Star Wars Wiki
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
