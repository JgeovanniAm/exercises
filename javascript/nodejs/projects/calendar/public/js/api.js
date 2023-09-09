async function APIasync(url) {
    const base = 'http://localhost:3000';
    const response = await fetch(base + url);
    const data = await response.json();
    return data;
}

function API(url) {
    const base = 'http://localhost:3000';
    return  fetch(base + url)
        .then(res  => res.json())
        .catch(err => console.log(err))
}