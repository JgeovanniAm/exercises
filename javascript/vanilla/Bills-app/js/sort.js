const SortDATA = (function () {
    let sortData;
    return class {
        constructor(ClassData) {
            this.ClassData = ClassData;
        }
        sortName() {
            sortData = this.ClassData.array.sort((a, b) => {
                a = a.name.toLowerCase();
                b = b.name.toLowerCase();
                if (a > b) return 1;
                else if (a < b) return -1;
                else if (a === b) return 0;
            });
            this.ClassData.build(this.ClassData.num);
        }
        sortNamePrevious() {
            sortData = this.ClassData.array.sort((a, b) => {
                a = a.name.toLowerCase();
                b = b.name.toLowerCase();
                if (a < b) return 1;
                else if (a > b) return -1;
                else if (a === b) return 0;
            });
            this.ClassData.build(this.ClassData.num);
        }
        SortAmount() {
            sortData = this.ClassData.array.sort((a, b) => { return a.total - b.total; });
            this.ClassData.build(this.ClassData.num);
        }
        SortAmountPrevious() {
            sortData = this.ClassData.array.sort((a, b) => { return b.total  - a.total ; });
            this.ClassData.build(this.ClassData.num);
        }
        SortDate() {
            sortData = this.ClassData.array.sort((a, b) => { 
                return  parseInt(a.date.slice(5, 7)) - parseInt(b.date.slice(5, 7))
            });
            this.ClassData.build(this.ClassData.num);
        }
        SortDatePrevious(){
            sortData = this.ClassData.array.sort((a, b) => { 
                return  parseInt(b.date.slice(5, 7)) - parseInt(a.date.slice(5, 7));
            });
            this.ClassData.build(this.ClassData.num);
        }
    }
}())