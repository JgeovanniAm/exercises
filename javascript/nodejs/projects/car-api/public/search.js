let search = document.querySelector('#search'),
    btnSearch = document.querySelector('.btnSearch')
btnSearch.addEventListener('click', searching);


function searching() {
    const string = search.value;
    API(`/api/v1/cars/${string}`).then(RenderData);
}
