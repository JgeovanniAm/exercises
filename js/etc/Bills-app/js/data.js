const DataClass = (function () {
    return class {
        constructor(array, num) {
            this.array = array;
            this.num = num;
        }
        build(num){
            this.num = num;
            const table = document.querySelector(`[data-num="${num}"]`);
            table.innerHTML='';
            let i=-1;
            this.array.forEach(element => {
                const tr = document.createElement('tr');
                i++;
                tr.id = i
                for( const item in element){
                    const td = document.createElement('td');
                    td.innerText = element[item];
                    tr.append(td);
                    table.appendChild(tr)
                }
            });
        }
    }
}())

