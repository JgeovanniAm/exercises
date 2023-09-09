API(`/api/v1/months`).then(RenderData);
let Objectdate = new Date();
let dateCounter = Objectdate.getDate()
let monthCounter = Objectdate.getMonth()
let yearCounter = Objectdate.getFullYear();

const btnprevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const datesWrapper = document.querySelector('.dates--days');

function RenderData(dbs) {
    btnNext.addEventListener('click', nextMonth);
    btnprevious.addEventListener('click', lastMonth);

    function startWeek() {
        let start = new Date(yearCounter, monthCounter, 1);
        return ((start.getDay() - 1) === -1) ? 6 : start.getDay() - 1
    }

    function setInnerText() {
        datesWrapper.innerHTML = "";
        Objectdate.setFullYear(yearCounter, monthCounter, dateCounter);
        const element = dbs[monthCounter].mes;
        month.innerHTML = element;
        year.innerHTML = yearCounter.toString();
        months();
        APIasync(`/api/v1/months/month=${monthCounter}`).then(writeEvents);
    }

    function nextMonth() {
        if (monthCounter == 11) {
            monthCounter = -1
            yearCounter++
        };
        monthCounter++
        setInnerText()
        btnNext.style.display = "none";
        btnprevious.style.display = "none";
    }

    function lastMonth() {
        if (monthCounter == 0) {
            monthCounter = 11;
            yearCounter--;
        }
        monthCounter--
        setInnerText()
        btnNext.style.display = "none";
        btnprevious.style.display = "none";
    }

    function months() {
        datesWrapper.innerHTML = "";
        for (let index = startWeek(); index > 0; index--) {
            const dayItem = document.createElement('div');
            dayItem.innerHTML = (dbs[monthCounter].days - 1) - (index - 1);
            dayItem.style.opacity = '0';
            datesWrapper.appendChild(dayItem);
        }

        if (yearCounter % 100 !== 0 && yearCounter % 4 === 0 || yearCounter % 400 === 0) {
            if (monthCounter == 1) {
                let num = dbs[1].days - 1;
                for (let index = 1; index <= num; index++) {
                    const dayItem = document.createElement('div');
                    dayItem.innerHTML = index;
                    datesWrapper.appendChild(dayItem);
                    if (index == dateCounter) dayItem.style.color = 'red';
                }
            }
            else {
                for (let index = 1; index <= dbs[monthCounter].days; index++) {
                    const dayItem = document.createElement('div');
                    dayItem.innerHTML = index;
                    datesWrapper.appendChild(dayItem);
                    if (index == dateCounter) dayItem.style.color = 'red';
                }
            }
        } else {
            for (let index = 1; index <= dbs[monthCounter].days; index++) {
                const dayItem = document.createElement('div');
                dayItem.innerHTML = index;
                datesWrapper.appendChild(dayItem);
                if (index == dateCounter) dayItem.style.color = 'red';
            }
        }
    }

    setInnerText();
    NewPostDate(dbs);
    DELETE(dbs);
}



