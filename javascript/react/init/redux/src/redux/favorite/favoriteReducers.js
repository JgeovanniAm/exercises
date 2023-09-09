const initialState = {
  data_favorite: [],
};

export default  (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_FAVORITE': return {
      ...state,
      data_favorite: [...state.data_favorite, action.item],
    };
    case 'DELETE_FAVORITE': 
    const objectFound = state.data_favorite.findIndex(x => x.char_id === action.item.char_id);
    state.data_favorite.splice(objectFound, 1);
    return {
      ...state,
      data_favorite: state.data_favorite
    };
    default: return state;
  }
}
