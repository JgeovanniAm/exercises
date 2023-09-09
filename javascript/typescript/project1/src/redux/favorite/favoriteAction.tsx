interface Action {
  type: string
  item: object
}

export default {
  addFavorite: (item:object):Action => { return { type: 'ADD_FAVORITE', item: item } },
  deleteFavorite: (item:object):Action => { return { type: 'DELETE_FAVORITE',  item: item } }
}