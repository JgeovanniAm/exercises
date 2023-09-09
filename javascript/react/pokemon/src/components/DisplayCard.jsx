import React from 'react';
import Image from './Image';
import DisplayInfo from './infoCard/DisplayInfo';
import '../index.css'

class DisplayCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      collect_info: null,
    }
  }

  display_info = (id) => {
    this.setState({ open: true });
    const findObject = this.props.result.find(x => x.id === id);
    findObject && this.setState({ collect_info: findObject });
  }

  closeInfo = () => {
    this.setState({ open: false })
  }

  render() {
    const array = this.props.result;
    let Card;
    Card = (
      array.map((i, index) => {
        return (
          <Image displayinfo={this.display_info} id={i.id} url={i.imageUrl} />
        )
      })
    )
    return (
      <React.Fragment>
        {
          this.state.open &&
          <div className="info">
            <DisplayInfo 
              allFilter= {this.props.allFilter}
              difference={this.props.difference} 
              active_btn={this.props.activeF_btn} 
              deactivate_btn={this.props.deactivateF_btn}  
              close={this.closeInfo} 
              collect_info={this.state.collect_info} />
          </div>
        }
        {array.length === 0 ? Card = 'no hay resulatdo' : Card}
      </React.Fragment>
    )
  }
}

export default DisplayCard;