/**GET api/v1/months/:year/:month
Returns the data for the requested month, returns all the days in the month and each day total events
:year param must be a number
:month param must be a number between 1 and 12 for the month of the yea
 */

function writeEvents(data) {
    btnNext.style.display = "block";
    btnprevious.style.display = "block";
    const daysElements = document.querySelectorAll('.dates--days > div');
    const filterEventYear = data.events.filter(events => events.year == year.innerHTML);
    filterEventYear.forEach(element => {
        for (const iterator of daysElements) {
            if (iterator.innerHTML == element.day) iterator.className = "event";
        }
    });
    setElement_Events(filterEventYear, daysElements);
}

function setElement_Events(data, elements) {
    for (const iterator of elements) {
        if (iterator.className == "event") {
            iterator.addEventListener('click', e => {
                const eventsday = data.filter(x => x.day == parseFloat(e.target.innerHTML));
                console.log(eventsday)
                if (eventsday.length == 0);
                else showinfo(eventsday);
            });
        }
    }
}

function showinfo(data_info) {
    const body = document.querySelector('body')
    const dialog = document.createElement('dialog');
    const close = document.createElement('button');
    console.log(data_info)
    close.innerHTML = "X";
    dialog.appendChild(close)
    body.appendChild(dialog)
    dialog.show()
    close.addEventListener('click', () => dialog.close())
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
}