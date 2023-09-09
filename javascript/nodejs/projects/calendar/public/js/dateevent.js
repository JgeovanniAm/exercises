/**GET api/v1/events/:date
Returns all the events for the date day
:date param must be a valid date
 */
let btnEventsDate = document.querySelector('.eventsDate');
const dayinput = document.querySelector('.dayinput');
const monthinput = document.querySelector('.monthinput');
const yearinput = document.querySelector('.yearinput');

const searchDate = document.createElement('input');
searchDate.type = "search";
searchDate.placeholder = "search event";

btnEventsDate.addEventListener('click', () => {
    if(dayinput.value == "" || monthinput.value == "" || yearinput.value == "") alert('complete la vara miher');
    else API(`/api/v1/events/day=${dayinput.value}&month=${monthinput.value}&year=${yearinput.value}`).then(showEventsDATE);
})

function showEventsDATE(data_info) {
    dialog.innerHTML = ""
    const body = document.querySelector('body')
    const close = document.createElement('button');
    console.log(data_info)
    close.innerHTML = "close";
    dialog.appendChild(searchDate)
    dialog.show();
    close.addEventListener('click', () => dialog.remove());
    if (data_info.length == 0) {
        const h3 = document.createElement('h3');
        h3.innerHTML = `No hay eventos para la fecha ${dayinput.value} / ${monthinput.value} / ${yearinput.value} `;
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

searchDate.addEventListener('input', searchingDatevents );
function searchingDatevents() {
    const string = searchDate.value;
    API(`/api/v1/event/day=${dayinput.value}&month=${monthinput.value}&year=${yearinput.value}&search=${string}`).then(showEventsDATE);
}