import React from 'react';
import '../../index.css'

class BtnAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stateBtn: false
    }
  }

  /**
  * @method activeBnt_add active my btn to add into favorites cards view
  * @method deleteBtn_add deactivate my btn to delete my card of favorite cards view
  * @param item is my data selected and it will be processed
  * @method componentDidMount check my state button before and after rendering or add and delete data
  */

  componentDidMount() {
    // state btn to sections infoFavorite
    this.props.data.difference == 'isFavorite' && this.setState({ stateBtn: true });
    // state btn to sections Favorite
    if (this.props.data.allFilter.length > 0) {
      const findObject = this.props.data.allFilter.find(x => x.id == this.props.data.collect_info.id);
      findObject === undefined ? this.setState({ stateBtn: false }) : this.setState({ stateBtn: true });
    }
  }

  handleClick = () => {
    const { collect_info } = this.props.data;
    const { active_btn } = this.props.data;
    if (!this.state.stateBtn) this.setState({ stateBtn: true }, () => { active_btn(collect_info,this.state.stateBtn) });
    if (this.state.stateBtn) {
      this.setState({ stateBtn: false }, () => {
        this.props.data.difference == 'isFavorite' && this.props.data.close();
        active_btn(collect_info , this.state.stateBtn);
      });
    };
  }

  render() {
    return <button className="btn-favorite" onClick={this.handleClick}>{this.state.stateBtn ? 'quitar' : 'añadir'}</button>
  }
}

export default BtnAdd