import React from 'react';
import mydata from './services';
import DisplayCard from './components/DisplayCard';
import Search from './components/Search';
import ShowBtn from './components/Favorite/ShowBtn'
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      search: [],
      favorite_array: [],
      value: '',
      favorite: false
    }
  }

  async componentWillMount() {
    await mydata().then(result => {
      this.setState({ cards: result.cards })
    })
  }

  // search card
  searchCard = (value, data) => {
    const search_array = [];
    // only .name object
    const array = data.map(x => x.name);
    array.forEach(item_string => {
      // filter data with indexOf and loop for each item
      if (item_string.indexOf(value) > -1) {
        const found = array.indexOf(item_string);
        search_array.push(data[found]);
      }
    });
    this.setState({
      search: search_array,
      value: value,
    })
  }

  // show favorites cards
  displayFavorite = () => {
    if (this.state.favorite === false) this.setState({ favorite: true });
    else if (this.state.favorite === true) this.setState({ favorite: false });
  }

  /**
   * @method activeBnt_add active my btn to add into favorites cards view
   * @method deleteBtn_add deactivate my btn to delete my card of favorite cards view
   * @param item is my data selected and it will be processed
   */

  activeBnt_add = (item, statebNT) => {
    if (statebNT) this.setState({ favorite_array: [item, ...this.state.favorite_array] });
    else {
      let { favorite_array } = this.state;
      const objectFind = favorite_array.findIndex(x => x.id === item.id);
      favorite_array.splice(objectFind, 1);
      this.setState({ favorite_array: favorite_array });
    }
  }

  render() {
    const search = this.state.search;
    const allCards = this.state.cards;
    const value = this.state.value;
    let data;
    if (value === '') data = this.state.favorite ? this.state.favorite_array : allCards;
    else data = search;
    return (
      <React.Fragment>
        <div>
          <h1 className="title">pokemons saiyan</h1>
          <Search
            result={this.state.favorite ? this.state.favorite_array : allCards}
            search_methods={this.searchCard}
          />
          <ShowBtn favorite_state={this.state.favorite} changeState={this.displayFavorite} />
        </div>
        <div className="wrapper-card">
          <DisplayCard
            activeF_btn={this.activeBnt_add}
            deactivateF_btn={this.deleteBtn_add}
            allFilter={this.state.favorite_array}
            result={data}
            difference={this.state.favorite ? 'isFavorite' : 'isNotFavorite'}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App;