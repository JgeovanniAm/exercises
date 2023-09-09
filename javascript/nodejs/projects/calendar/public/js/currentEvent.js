/**GET api/v1/events
Returns all the current day events */
let btnEvents = document.querySelector('.eventsToday');
API(`/api/v1/events`).then(showEventsToday);

function showEventsToday(data){
    console.log(data)
    btnEvents.addEventListener('click',() => showEvents(data))
}

const search = document.createElement('input');
const dialog = document.createElement('dialog');
search.type = "search";
search.placeholder = "search event";

function showEvents(data_info) {
    dialog.innerHTML = ""
    const body = document.querySelector('body')
    const close = document.createElement('button');
    console.log(data_info)
    close.innerHTML = "close";
    dialog.appendChild(search)
    dialog.show();
    close.addEventListener('click', () => dialog.remove());
    if (data_info.length == 0) {
        const h3 = document.createElement('h3');
            h3.innerHTML = 'No hay eventos para el dia de hoy';
            dialog.appendChild(h3)
    } else {
        for (const iterator of data_info) {
            const h3 = document.createElement('h3');
            h3.innerHTML = '+' + '' + iterator.name;
            dialog.appendChild(h3)
        }
    }
    body.appendChild(dialog);
    dialog.appendChild(close);
}

/**
 * OBTENER api / v1 / events? Search = text
Devuelve todos los eventos del día actual que coinciden con el texto de búsqueda
 */

search.addEventListener('input', searching );
function searching() {
    const string = search.value;
    API(`/api/v1/events:${string}`).then(showEvents);
}