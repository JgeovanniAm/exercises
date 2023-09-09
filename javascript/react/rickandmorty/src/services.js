const mydata = () => {
  return fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes')
  .then((response) => {
    return response.json()
  })
}

export default mydata;