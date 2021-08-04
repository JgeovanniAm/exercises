(function () {
    const counter = {
        hours: document.querySelector('.hora'),
        minutes: document.querySelector('.minutes'),
        seconds: document.querySelector('.seconds')
    }
    const commands = {
        set: document.querySelector('.set'),
        stop: document.querySelector('.stop'),
        play: document.querySelector('.play')
    }
    class time {
        constructor(hours, minutes, seconds) {
            this.hours = hours;
            this.minutes = minutes,
            this.seconds = seconds;
        }
        timeSeconds() {
            if (this.seconds == 60) {
                this.seconds = 0;
                this.seconds++;
            } else {
                this.seconds += 1;
            }
            if (this.seconds == 60) {
                this.minutes += 1;
                if (this.minutes == 60) {
                    this.minutes = 0;
                    this.minutes += 1;
                }
            }
            if (this.minutes == 60) {
                this.hours += 1;
            }
        }
        setInnerHTML() {
            counter.seconds.innerHTML = ' / ' + this.seconds + ' / '
            counter.minutes.innerHTML = ' / ' + this.minutes + ' / '
            counter.hours.innerHTML = ' /  ' + this.hours + ' / '
        }
        setTimeClear() {
            for (const key in counter) {
                counter[key].innerHTML = ' / ' + 0 + ' / ';
            }
        }
    }
    let run;
    let object = new time(0, 0, 0)
    class RunInterval {
        constructor(html, time) {
            this.html = html
            this.time = time
        }
        startTime() {
            run = setInterval(() => {
                this.html = object.setInnerHTML();
                this.time = object.timeSeconds();
                comparation()
            }, 1000)
        }
        clearInterval() {
            clearInterval(run)
        }
    }
    let setIntervalFunction = new RunInterval(object.setInnerHTML(), object.timeSeconds())
    commands.play.addEventListener('click', function () {
        setIntervalFunction.startTime()
        //console.log(setIntervalFunction) duda 
    })
    commands.stop.addEventListener('click', function () {
        clearInterval(setIntervalFunction.clearInterval())
    })
    commands.set.addEventListener('click', function () {
        object.setTimeClear();
        clearInterval(setIntervalFunction.clearInterval())
        object = new time(0, 0, 0)
    })
    const table = document.querySelector('.list')
    let array = [];
    let btn = document.querySelector('.button_print')
    class ElementValue {
        constructor(name, time) {
            name = document.querySelector('.NameHomework').value;
            time = document.querySelector('.timeNumber').value;
            this.name = name;
            this.time = time;
        }
    }
    function PrintItem() {
        let objectValue = new ElementValue();
        array.push(objectValue)
        createElementDom(array)
    }
    function createElementDom(item) {
        table.innerHTML = '';
        item.forEach(element => {
            const tr = document.createElement('tr');
            for (const key in element) {
                const td = document.createElement('td');
                td.innerHTML = element[key];
                tr.appendChild(td)
                table.appendChild(tr);
            }
        });
    }
    function comparation() {
        array.forEach(element => {
            //console.log(element)
            if (parseInt(element.time) == object.seconds || parseInt(element.time) == object.seconds) {
                //console.log(array)
                array.splice(array.indexOf(element), 1);
                table.innerHTML = '';
                createElementDom(array)
            }
        });
    }
    btn.addEventListener('click', PrintItem)
}())

