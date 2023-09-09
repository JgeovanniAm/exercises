import React from 'react';

class ButtonFavorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  
  handleClick = e => {
    return this.props.favorite();
  }

  render() {
    return (
      <button className={this.props.classbtn} onClick={this.handleClick} >
      </button >
    )
  }
}

export default ButtonFavorite;