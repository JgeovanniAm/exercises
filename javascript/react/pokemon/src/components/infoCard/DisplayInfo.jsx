import React from 'react';
import BtnAdd from '../Favorite/BtnAdd'
import '../../index.css'
class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  // will close my info view
  handleClick(){
    this.props.close()
  }

  render() {
    const {collect_info} = this.props;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>x</button>
        <div>
          <img src={collect_info.imageUrl} alt="jiji" />
          <h1>{collect_info.name}</h1>
          <p>{collect_info.set}</p>
          <p>{collect_info.supertype}</p>
          <BtnAdd close={this.props.close} data={this.props} />
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayInfo;