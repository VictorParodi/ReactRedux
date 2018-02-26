import React, { Component } from 'react';

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input placeholder="Type here" onChange={this.onInputChange} />;  
  }
}

export default SearchBar;