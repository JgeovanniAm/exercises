import React from 'react';
import Cards from './components/Card';
import mydata from './services';
import ShowFavorite from './components/ShowFavorite';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodies: null,
      show: false,
      stateBtn: false,
    }
  }

  async componentWillMount() {
    await mydata().then(recurso => {
      this.setState({ episodies: recurso._embedded.episodes })
    })
  }

  render() {
    let card;
    if (this.state.episodies && this.state.show === false) {
      card = this.state.episodies.map(item => {
        return (
          <div className="card">
            <Cards
              data={item}
            />
          </div>
        )
      })
    }

    if (this.state.show) {
      let filter = this.state.episodies.filter(x => x.favorite);
      card = filter.map((item,index) => {
        return (
          <div className="card">
            <Cards
              data={item} />
          </div>
        )
      })
    }

    return (
      <React.Fragment>
        <h1 className="title">jimmy</h1>
        <ShowFavorite
          show={this.state.show}
          hid={e => {
            if (this.state.show === false) this.setState({ show: true });
            else if (this.state.show === true) this.setState({ show: false });
          }}
        />
        {card}
      </React.Fragment>
    )
  }
}

export default App;