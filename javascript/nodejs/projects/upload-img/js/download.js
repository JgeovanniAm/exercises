let download = document.querySelector('#download'),
    btnIdDownload = document.querySelector('.btnIdDownload'),
    form = document.querySelector('.form');

download.addEventListener('click', (e) => {
    e.preventDefault();
    let idDownload = btnIdDownload.value;
    window.location.href = `http://localhost:3000/imagenes/id:${idDownload}`;
})