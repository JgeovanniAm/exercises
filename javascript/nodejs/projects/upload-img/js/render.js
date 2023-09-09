let list = document.querySelector('.list-images')
async function API(url) {
    const base = 'http://localhost:3000';
    const response = await fetch(base + url);
    const data = await response.json();
    return data;
}
API(`/imagenes`).then(RenderData);

function RenderData(data) {
    
    data.Imagenes.forEach(element => {
        console.log(element)
        const item = document.createElement('li');
        let imagen = document.createElement('img');
        const title = document.createElement('h2');
        const id = document.createElement('h2');
        title.innerHTML = element.file;
        id.innerHTML = element.id;
        imagen.src = element.Location;
        item.appendChild(imagen);
        item.appendChild(title);
        item.appendChild(id);
        list.appendChild(item);
    });
}