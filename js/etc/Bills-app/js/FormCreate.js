let array = [];
const table = document.querySelector('.table');
const trash = document.querySelector('.trash');
const data = new DataClass(array, 0);
const ClassDrop = new ModificationData(table.childNodes, trash, data);
const classSort = new SortDATA(data);

function SortEvents() {
    let toggle = true;
    const ThName = document.querySelector('.th_name');
    const thDate = document.querySelector('.th_date');
    const thTotal = document.querySelector('.th_amount');
    ThName.addEventListener('click', sortNameToggle);
    thTotal.addEventListener('click', sortTotalToggle);
    thDate.addEventListener('click', sortDateToggle);

    function sortNameToggle() {
        if (toggle === true) {
            classSort.sortName();
            ClassDrop.Subscribe(true);
            toggle = false;
        } else if (toggle === false) {
            classSort.sortNamePrevious();
            ClassDrop.Subscribe(true);
            toggle = true;
        }
    }

    function sortTotalToggle() {
        if (toggle === true) {
            classSort.SortAmount();
            ClassDrop.Subscribe(true);
            toggle = false;
        } else if (toggle === false) {
            classSort.SortAmountPrevious();
            ClassDrop.Subscribe(true);
            toggle = true;
        }
    }

    function sortDateToggle() {
        if (toggle === true) {
            classSort.SortDate();
            ClassDrop.Subscribe(true);
            toggle = false;
        } else if (toggle === false) {
            classSort.SortDatePrevious();
            ClassDrop.Subscribe(true);
            toggle = true;
        }
    }
}

const DataPrint = (function () {

    let arrayLocal = localStorage.getItem('myArray');
    arrayLocal = JSON.parse(arrayLocal);
    if (arrayLocal == null) data.array = array;
    else data.array = arrayLocal;
    data.build(data.num)
    ClassDrop.Subscribe(true);
    SortEvents();

    const btnSave = document.querySelector('.btnSave');
    btnSave.addEventListener('click', AddLocalStorage)
    const btnEdit = document.querySelector('.btnedit');
    btnEdit.addEventListener('click', modalComponents)
    const btnCreate = document.querySelector('.btncreate');
    btnCreate.addEventListener('click', modalComponents);

    function modalComponents(event) {
        const nameInput = document.createElement('input');
        nameInput.type = "text";
        nameInput.placeholder = 'name';
        const dateinput = document.createElement('input');
        dateinput.type = "date";
        const total = document.createElement('input');
        total.type = "number";
        total.placeholder = 'total'
        const print = document.createElement('button');
        print.innerHTML = 'Accept';
        if (event.target == btnCreate) createModal(nameInput, dateinput, print, total);
        if (event.target == btnEdit) editDataTR(nameInput, dateinput, print, total)
    }

    function editDataTR(_nameInput, _dateinput, _print, _total) {
        const dialog = document.createElement('dialog');
        const html = document.querySelector('html');
        html.appendChild(dialog);
        dialog.show();
        dialog.appendChild(_nameInput);
        dialog.appendChild(_dateinput);
        dialog.appendChild(_total);
        dialog.appendChild(_print);
        _print.addEventListener('click', () => {
            dialog.close();
            const childTable = table.children
            for (const items of childTable) {
                if (items.style.opacity == "0.5") {
                    data.array[items.id].name = _nameInput.value;
                    data.array[items.id].date = _dateinput.value,
                        data.array[items.id].total = _total.value;
                }
            }
            data.build(data.num);
            ClassDrop.Subscribe(true);
        })
    }

    function createModal(_nameInput, _dateinput, _print, _total) {
        const dialog = document.createElement('dialog');
        const html = document.querySelector('html');
        html.appendChild(dialog);
        dialog.show();
        dialog.appendChild(_nameInput);
        dialog.appendChild(_dateinput);
        dialog.appendChild(_total);
        dialog.appendChild(_print);
        _print.addEventListener('click', () => {
            dialog.close()
            const objectValue = {
                name: _nameInput.value,
                date: _dateinput.value,
                total: _total.value
            }
            data.array.push(objectValue);
            data.build(data.num);
            ClassDrop.Subscribe(true);
        })
    }

    function AddLocalStorage() {
        localStorage.setItem('myArray', JSON.stringify(data.array));
    }

}())

