const requestApiArenas = new XMLHttpRequest();
const openPanel = document.querySelector('#bton1');
const closePanel = document.querySelector('#bton2');
const panel = document.querySelector('#panelareanas');
const panelContent = document.querySelector('#panelContent');
let response2;
openPanel.addEventListener('click', function () {
  panel.className = 'OPEN';
  audioBoton.play();
});
closePanel.addEventListener('click', function () {
  panel.className = 'panel';
  audioBoton.play();
});
// ------------------ funcion que itera y imprime la info de ARENAS ------------------ //
function ArenasInicio() {
  for (const itemArenas of response2) {
    const divPanel = document.createElement('div');
    const pArenas = document.createElement('p');

    divPanel.setAttribute('class', 'contenArenas');
    const arenas = itemArenas.name;

    const imgArenas = document.createElement('img');

    imgArenas.setAttribute('class', 'imgArenas');
    imgArenas.setAttribute('src', `http://www.clashapi.xyz/images/arenas/${itemArenas.idName}.png`);
    
    pArenas.innerHTML = arenas;
    divPanel.appendChild(pArenas);
    divPanel.appendChild(imgArenas);
    panelContent.appendChild(divPanel);
  }
}

requestApiArenas.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  response2 = event.target.response;
  ArenasInicio();
});

// Define el tipo de respuesta.
requestApiArenas.responseType = 'json';
requestApiArenas.open('GET', 'http://www.clashapi.xyz/api/arenas');
requestApiArenas.send();
