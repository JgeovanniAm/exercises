interface Action {
  type: string
  item: any
}

interface state {
  data_favorite: any[]
}

const initialState: state = {
  data_favorite: [],
};

export default (state = initialState, action: Action): state => {
  switch (action.type) {
    case 'ADD_FAVORITE': return {
      ...state,
      data_favorite: [...state.data_favorite, action.item],
    };
    case 'DELETE_FAVORITE':
      const objectFound = state.data_favorite.findIndex((x: any) => x.char_id === action.item.char_id);
      state.data_favorite.splice(objectFound, 1);
      return {
        ...state,
        data_favorite: state.data_favorite
      };
    default: return state;
  }
}
