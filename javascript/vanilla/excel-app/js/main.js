const BuildTable = (function () {
    const tableDom = document.querySelector('.wraper-table');
    return class buildContent {
        constructor(DataArray = [], counterInitialTr, counterInitialTd) {
            this.DataArray = DataArray;
            this.counterInitialTr = counterInitialTr;
            this.counterInitialTd = counterInitialTd;
        };
        build(countertd,countertr) {
            for (let index = 0; index < countertr; index++) {
                const row = document.createElement('tr');
                this.DataArray.push(row);
                for (let i = 0; i < countertd; i++) {
                    const column = document.createElement('div');
                    column.setAttribute("contenteditable",true);
                    column.id = i;
                    column.className = 'row';
                    row.appendChild(column);
                }
                tableDom.appendChild(row);
            }
        };
        insertRow() {
            this.counterInitialTr += 1;
            const row = document.createElement('tr');
            this.DataArray.push(row);
            for (let i = 0; i < this.counterInitialTd; i++) {
                const column = document.createElement('div');
                column.setAttribute("contenteditable",true);
                column.id = i;
                column.className = 'row';
                row.appendChild(column);
            }
            tableDom.appendChild(row);
            this.valueInner(); 
        };
        insertColumn() {
            this.counterInitialTd += 1;
            for (let index = 0; index < this.counterInitialTr; index++) {
                const columnÍnsert = document.createElement('div');
                columnÍnsert.setAttribute("contenteditable",true);
                columnÍnsert.id = this.counterInitialTd;
                columnÍnsert.className = 'row';
                this.DataArray[index].appendChild(columnÍnsert);
                this.valueInner();
            }
        };
        valueInner() {
            const letterArray = [" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];
            const row = this.DataArray[0].children;
            let numIDRow = 1;
            let numIdColumn = 1;
            for (let iterator = 0; iterator < row.length; iterator++) {
                row[iterator].innerHTML = letterArray[iterator];
                row[iterator].style.cursor="pointer";
                if(row[iterator].innerHTML == "undefined"){
                    while(letterArray.length <= numIdColumn ){
                        numIdColumn = -1;
                        numIdColumn ++;
                        row[iterator].innerHTML = `${letterArray[numIdColumn++]} - ${iterator}` ;
                        row[iterator].style.cursor="pointer";
                    }
                    row[iterator].innerHTML = `${letterArray[numIdColumn++]}-${iterator}`;
                    row[iterator].style.cursor="pointer";
                }
            }
            for (let iterator = 1; iterator < this.DataArray.length; iterator++) {
                this.DataArray[iterator].firstChild.innerHTML = numIDRow++;
                this.DataArray[iterator].firstChild.style.cursor="pointer"
            }
        };
    }
}());



