const mydata = (endpoint) => {
    return fetch(endpoint)
    .then((response) => {
      return response.json()
    })
  }
export default mydata