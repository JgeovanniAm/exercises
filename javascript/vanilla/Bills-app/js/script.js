/**const table = document.querySelector('.table');

const DataPrint = (function () {

    localStorageData()
    function localStorageData() {
        let arrayLocal = localStorage.getItem('myArray');
        arrayLocal = JSON.parse(arrayLocal);
        console.log(arrayLocal);
        if (arrayLocal == null) {
            const array = [];
            initialFunction(array);
        }
    }
    function initialFunction(array) {
        const trash = document.querySelector('.trash');
        const data = new DataClass(array, 0);
        const ClassDrop = new ModificationData(table.childNodes, trash, data);
        const classSort = new SortDATA(data);
        SortEvents(classSort, ClassDrop);
        modalComponents(array,ClassDrop,data)
    }
    
    function SortEvents(sort,drop) {
        let toggle = true;
        const ThName = document.querySelector('.th_name');
        const thDate = document.querySelector('.th_date');
        const thTotal = document.querySelector('.th_amount');
        ThName.addEventListener('click', sortNameToggle);
        thTotal.addEventListener('click', sortTotalToggle);
        thDate.addEventListener('click', sortTotalToggle);
    
        function sortNameToggle() {
            if (toggle === true) {
                sort.sortName();
                drop.Subscribe(true);
                toggle = false;
            } else if (toggle === false) {
                sort.sortNamePrevious();
                drop.Subscribe(true);
                toggle = true;
            }
        }
    
        function sortTotalToggle() {
            if (toggle === true) {
                sort.SortAmount();
                drop.Subscribe(true);
                toggle = false;
            } else if (toggle === false) {
                sort.SortAmountPrevious();
                drop.Subscribe(true);
                toggle = true;
            }
        }
    
        function sortTotalToggle() {
            if (toggle === true) {
                sort.SortDate();
                drop.Subscribe(true);
                toggle = false;
            } else if (toggle === false) {
                sort.SortDatePrevious();
                drop.Subscribe(true);
                toggle = true;
            }
        }
    }

    const btnEdit = document.querySelector('.btnedit');
    btnEdit.addEventListener('click', modalComponents)
    const btnCreate = document.querySelector('.btncreate');
    btnCreate.addEventListener('click', modalComponents);

    function modalComponents(event , array , dropevent , classDataevent) {
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
        if (event.target == btnCreate) createModal(nameInput, dateinput, print, total, array, dropevent , classDataevent);
        if (event.target == btnEdit) editDataTR(nameInput, dateinput, print, total, dropevent , classDataevent)
    }

    function editDataTR(_nameInput, _dateinput, _print, _total, _DropEvets, _ClassData) {
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
                    _ClassData.array[items.id].name = _nameInput.value;
                    _ClassData.array[items.id].date = _dateinput.value,
                        _ClassData.array[items.id].total = _total.value;
                }
            }
            _ClassData.build(_ClassData.num);
            _DropEvets.Subscribe(true);
        })
    }

    function createModal(_nameInput, _dateinput, _print, _total, _ArrayObject,_DropEvets,_ClassData) {
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
            _ArrayObject.push(objectValue);
            _ClassData.build(_ClassData.num);
            localStorage.setItem('myArray', JSON.stringify(_ClassData.array));
            _DropEvets.Subscribe(true);
        })
    }
}()) */