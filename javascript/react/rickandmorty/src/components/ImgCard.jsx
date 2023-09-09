import React from 'react';

class ImgCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src = {this.props.src} />
    )
  }
}

export default ImgCard;