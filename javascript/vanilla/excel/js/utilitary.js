const utilitary = (function () {
    let array;
    const buildTable = new BuildTable(array, 10, 10);
    const bntColumn = document.querySelector('.btn-column');
    const btnRow = document.querySelector('.btn-row');
    const btnBold = document.querySelector('.bold-btn');
    const btnNormal = document.querySelector('.normal-btn');
    const inputType = document.querySelector('#select');
    const removeRows = document.querySelector('.removeRows');
    const removeColumn = document.querySelector('.removeColumn');
    const saveBtn = document.querySelector('.save');
    const option = document.querySelectorAll('.option');

    window.addEventListener('load', printLocalDATA);
    /**
    * @param {*} parameterClass is a class that construc my table and others functions
    */
    function addRow(parameterClass) {
        parameterClass.insertRow();
        FontStylesRows(parameterClass.DataArray)
        searchRows(parameterClass.DataArray);
        searchColumns(parameterClass.DataArray);
    }

    function addColumn(parameterClass) {
        parameterClass.insertColumn();
        FontStylesRows(parameterClass.DataArray)
        searchRows(parameterClass.DataArray);
        searchColumns(parameterClass.DataArray);
    }

    /**
    * 
    * @param {*} parameterClass is a parameter that contains  parameterClass.dataArray of my class
    **/
    function searchColumns(array) {
        // clear class input
        function clearClassActive() {
            for (let index = 0; index < array.length; index++) {
                for (const i of array[index].children) {
                    i.style.opacity = '1';
                    i.style.color = "black";
                    i.style.background = "transparent";
                }
            }
        }
        // search inputs child of my column
        function searchInputColumns() {
            for (const iterator of array[0].children) {
                iterator.addEventListener('click', function (e){
                    clearClassActive();
                    for (let index = 0; index < array.length; index++) {
                        for (const i of array[index].children) {
                            let firstArrayChildren = array[0].children;
                            let allArrayChildren = array[index].children;
                            /**
                             * array.from is covert my arrayHtmlCollections en a simple array
                             */
                            const arraya = Array.from(allArrayChildren);
                            const newArray = Array.from(firstArrayChildren);
                            if (arraya.indexOf(i) == newArray.indexOf(e.target)) {
                                removeColumn.style.display = 'block';
                                i.style.backgroundColor = "black";
                                i.style.color = "rgb(4, 152, 172)";
                                i.style.opacity = '0.15';
                                removeColumn.addEventListener('click', () => {
                                    if (i.style.opacity == "0.15") i.remove();
                                    removeColumn.style.display = 'none';
                                })
                            }
                        }
                    }
                })
            }
        }
        searchInputColumns()
    }

    /**
     * 
     * @param {*} arrayData is a parameter that contains  buildData.dataArray of my class
     */

    function searchRows(arrayData) {
        // clear class input
        function setClassActive() {
            for (const i of arrayData) {
                i.style.opacity = '1';
                i.style.background = "transparent";
                i.style.color = "black";
            }
        }
        // search inputs child of my row
        function searchNodeTr(event) {
            setClassActive()
            let select = event.target;
            const tr = select.parentNode;
            removeRows.style.display = 'block';
            tr.style.backgroundColor = "black";
            tr.firstChild.style.color = "rgb(4, 152, 172)";
            tr.style.opacity = '0.15';
            removeRows.addEventListener('click', () => {
                if (tr.style.opacity == "0.15") {
                    removeRows.style.display = 'none';
                    tr.remove();
                }
            });
        }
        for (const i of arrayData) {
            i.firstChild.addEventListener('click', searchNodeTr);
        }
    }
    /**
     * 
     * @param {*} data= Class dataarray
     * @param FontStylesRows add styles of the inputs
     */
    function FontStylesRows(data) {
        function removeAttribute(){
            for (const iterator of data) {
                for (const i of iterator.children) {
                    i.setAttribute("boolean",false);
                    i.style.color="black";
                }
            }
        }

        function TargetTD(e) {
            removeAttribute()
            let select = e.target;
            select.setAttribute("boolean",true);
            select.style.color="rgb(4, 152, 172)";btnBold.style.display = 'block';btnNormal.style.display = 'block';inputType.style.display = 'block';
            
            btnBold.addEventListener('click', () => {
                if(select.style.color  == "rgb(4, 152, 172)")select.style.fontWeight = 'bold';
            });
            btnNormal.addEventListener('click', () => {
                if(select.style.color  == "rgb(4, 152, 172)")select.style.fontWeight = 'normal';
            });
            inputType.addEventListener('change', (e) =>{
                if(select.style.color  == "rgb(4, 152, 172)")select.style.fontSize = e.target.value ; 
            })
            
        }

        for (const iterator of data) {
            for (const i of iterator.children) {
                i.addEventListener('click', TargetTD)
            }
        }
    }

    function init(DATA) {
        DATA.build(DATA.counterInitialTd, DATA.counterInitialTr);
        DATA.valueInner();
        FontStylesRows(DATA.DataArray)
        searchRows(DATA.DataArray);
        searchColumns(DATA.DataArray);
        removeColumn.addEventListener('click', () => { DATA.counterInitialTd-- })
        btnRow.addEventListener('click', () => { addRow(DATA) });
        bntColumn.addEventListener('click', () => { addColumn(DATA) });
        saveBtn.addEventListener('click', () => { Get_localStorage(DATA) });
    }

    function Get_localStorage(DATA) {
        const dataStringsRows = [];
        for (let index = 0; index < DATA.DataArray.length; index++) {
            const data_data = [];
            for (const i of DATA.DataArray[index].children) {
                data_data.push(i.innerHTML)
            }
            dataStringsRows.push(data_data);
            localStorage.setItem('myArray', JSON.stringify(dataStringsRows));
        }
        localStorage.setItem('counterInitialTd', JSON.stringify(DATA.counterInitialTd))
        localStorage.setItem('counterInitialTr', JSON.stringify(DATA.counterInitialTr))
    }

    function printLocalDATA() {
        let arrayLocal = localStorage.getItem('myArray');
        arrayLocal = JSON.parse(arrayLocal);
        let counterInitialTr = localStorage.getItem('counterInitialTr');
        counterInitialTr = JSON.parse(counterInitialTr);
        let counterInitialTd = localStorage.getItem('counterInitialTd');
        counterInitialTd = JSON.parse(counterInitialTd);
        if (counterInitialTr == null) init(buildTable);
        else {
            let newarrayData_data;
            const NewData = new BuildTable(newarrayData_data, counterInitialTr, counterInitialTd)
            init(NewData)
            const arrayParentRow = [];
            for (let index = 0; index < NewData.DataArray.length; index++) {
                const arrayChild = []
                for (const i of NewData.DataArray[index].children) {
                    arrayChild.push(i);
                }
                arrayParentRow.push(arrayChild);
                for (let iterador = 0; iterador < arrayLocal[index].length; iterador++) {
                    arrayParentRow[index][iterador].innerHTML = arrayLocal[index][iterador]
                }
            }
        }
    }
}())
