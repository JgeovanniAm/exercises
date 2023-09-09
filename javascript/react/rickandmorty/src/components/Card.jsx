import React from 'react';
import Title from './Title';
import ImgCard from './ImgCard';
import Button from './Favorite';
import Description from './Description';
import '../index.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateBtn: false,
    }
  }

  active = e => {
    const myFavorite = {
      favorite: 'isFavorite',
    }
    Object.assign(
      this.props.data,
      myFavorite
    );
  }

  inactive = e => {
    delete this.props.data.favorite;
  }

  handleClick = e => {
    if (this.state.stateBtn == false) {
      this.active(e);
      this.setState({
        stateBtn: true
      })
    } else if (this.state.stateBtn == true) {
      this.inactive(e);
      this.setState({
        stateBtn: false
      })
    }
  }

  componentWillUpdate(i,o){
    if(i.data.favorite){
      if(o.stateBtn == false){
        this.setState({
          stateBtn: true
        })
      }
    }
    if(!i.data.favorite){
      if(o.stateBtn == true){
        this.setState({
          stateBtn: false
        })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-img">
          <ImgCard src={this.props.data.image.original} />
        </div>
        <Title name={this.props.data.name} />
        <Description description={this.props.data.summary} />
        <Button
          classbtn={this.props.data.favorite ? "active" : "inactive"}
          favorite={this.handleClick}
        />
      </React.Fragment>
    )
  }
}

export default Card;