import React from 'react';
// onBlur usar onblur para mi problma de search al hacer show favorite
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleChange = e => {
    const value = e.target.value;
    this.props.search_methods(value, this.props.result)
  }

  render() {
    return (
      <input ref={this.textInput} onChange={this.handleChange} type="search" placeholder="search" />
    )
  }
}

export default Search