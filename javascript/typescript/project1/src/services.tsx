const mydata = (endpoint:string) => {
    return fetch(endpoint)
    .then((response) => {
      return response.json()
    })
  }
export default mydata;