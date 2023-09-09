export default {
  addFavorite: (object) => { return { type: 'ADD_FAVORITE', item: object } },
  deleteFavorite: (object) => { return { type: 'DELETE_FAVORITE',  item: object } }
}