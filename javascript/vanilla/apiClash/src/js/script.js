// ---------- Programa que extrae elementos de un Api de clash royale y basicamente se ejecutará un buscador que buscará todos los elementos con toda la info ----------//
const requestCard = new XMLHttpRequest();
const audioBoton = new Audio('img/clashofcla_fXL19Y24.mp3');
const audioPage = new Audio('img/clashofcla_KaPjg8Em.mp3');
const inputTextSearch = document.getElementById('TextSearch');
const contenSearch = document.getElementById('contenSearch');
const tropps = [];
let listItem;
let imgItem;
let searchString;
let stringValue;
let stringLower;
let searchDescrip;
let searchName;
let listItemParrafo;
let string;
let response;

// ----------- funcion que busca los elementos en el array y los imprime en el dom. ---------- //

function searchCard() {
    for (const i of tropps) {
      string = i.indexOf(inputTextSearch.value);
      if (string > -1) {
        // busco el indice y la posicion de array con los elementos .response
        searchString = tropps.indexOf(i);
        
        // declaro variables con el event.response con el indice o posicion.Name
        searchName = response[searchString].name;
        searchDescrip = response[searchString].description;
        // creo los elemnentos que van a contender mis elementos y ejecutarlo en el dom;
        
        imgItem = document.createElement('img');
        listItem = document.createElement('div');
        listItemParrafo = document.createElement('p');
        listItem.setAttribute('class', 'infocard');
        stringValue = i;
        stringLower = stringValue.toLowerCase();
        imgItem.setAttribute('class', 'imgcard');

        // metodo que uso para buscar las imagenes //
        imgItem.setAttribute('src', `http://www.clashapi.xyz/images/cards/${stringLower}.png`);
        listItemParrafo.innerHTML = `${searchName}  /  ${searchDescrip}`;
        listItem.appendChild(listItemParrafo);
        listItem.appendChild(imgItem);
        contenSearch.appendChild(listItem);
      }
    }
}

// ----------- limpia los inputs e ejecuta la funcion que busca los elementos ---------- //

function Clearinputs() {
  contenSearch.className = 'ON';
  contenSearch.innerHTML = '';
  searchCard();
}

// ------------- Registra el manejador de eventos.-------------- //

/*if (xmlhttp.readyState==4) indica que se ha recibido la información solicitada del servidor.
    Puede tomar los siguientes valores:
    0: no inicializado. Indica que no se ha abierto la conexión con el servidor (no se ha llamado a open)
    1: conexión con servidor establecida. Indica que se ha abierto la conexión pero todavía no se ha enviado la petición (no se ha llamado a send)
    2: recibida petición en servidor. Indica que el servidor ya ha recibido la petición (se ha llamado a send)
    3: enviando información. Se está enviando la información por parte del servidor, todavía no se ha completado la recepción.
    4: completado. Se ha recibido la información del servidor y está lista para operar con ella.
    status:Código numérico entero enviado por el servidor que indica el tipo de respuesta dada a la petición. Puede tomar valores como:
    200: respuesta correcta.
    404: no encontrado.
    500: error interno del servidor.*/


requestCard.addEventListener('load', function (event) {
  // Obtiene la respuesta.
  if(requestCard.readyState == 4 && requestCard.status == 200){

    response = event.target.response;

    // itero todos los elementos en un Array para aplicarlos en el la funcionque
    // busca mis elementos y los ejecuta con .idNme del ojecto del api
    for (const item of response) {
      tropps.push(item.idName);
    } 

  }
  // ------ agrega al Dom los elemntos del API y limpia ------- //

  inputTextSearch.addEventListener('input', () => {
    Clearinputs();
    audioPage.play();
    audioBoton.play();
  });
});

// ----- Defino el tipo de respuesta.------ //

requestCard.responseType = 'json';
requestCard.open('GET', 'http://www.clashapi.xyz/api/cards');
requestCard.send();
