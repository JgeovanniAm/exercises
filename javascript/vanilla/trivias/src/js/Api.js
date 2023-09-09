async  function API(url) {
    const base = 'https://triviaserver.herokuapp.com';
    const response = await fetch(base + url);
    const data = await response.json();
    return data;
}