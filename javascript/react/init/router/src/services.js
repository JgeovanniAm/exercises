const mydata = () => {
  return fetch('https://api.pokemontcg.io/v1/cards')
  .then((response) => {
    return response.json()
  })
}

export default mydata;