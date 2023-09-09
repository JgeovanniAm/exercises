import React from 'react';

class ShowFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainstate: false,
    }
  }

  render() {
    return (
      <button
        className="btn-favorite"
        onClick={this.props.hid}
      >
        {this.props.show ? 'show all' : 'show favorite'}
      </button>
    )
  }
}

export default ShowFavorite;