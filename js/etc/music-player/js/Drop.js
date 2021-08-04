const DropData = (function () {
    return class drop {
        constructor(itemArray, mylist, arraySong, DatabuildSong, btn, CommandsData) {
            this.itemArray = itemArray;
            this.mylist = mylist;
            this.arraySong = arraySong;
            this.DatabuildSong = DatabuildSong;
            this.btn = btn;
            this.CommandsData = CommandsData;
            const array = []
            this.array = array;
        }
        eventStart() {
            for (const iterator of this.itemArray) {
                this.iterator = iterator;
                this.iterator.setAttribute("draggable", true);
                this.iterator.addEventListener('dragstart', (e) => {
                    this.eventend(e.target);
                    this.eventOver();
                    this.eventleave();
                    this.drop(e.target);
                })
            }
        }
        eventend(index) {
            index.addEventListener('dragend', () => { })
        }
        eventOver() {
            this.mylist.addEventListener('dragover', (e) => { e.preventDefault(); })
        }
        eventleave() {
            this.mylist.addEventListener('dragleave', (e) => { e.preventDefault(); })
        }
        cleanPropRepeat(originalArray, prop) {
            const newArray = [];
            const object = {};
            for (const i in originalArray) {
                object[originalArray[i][prop]] = originalArray[i];
            }
            for (const i in object) {
                newArray.push(object[i]);
            }
            return newArray;
        }
        composeArry() {
            const clearArray = [];
            this.clearArray = clearArray;
            this.clearArray = this.cleanPropRepeat(this.DatabuildSong.newArray, "song");
            return this.clearArray;
        }
        drop(index) {
            this.mylist.addEventListener('drop', (e) => {
                e.preventDefault();
                this.mylist.appendChild(index);
                this.DatabuildSong.playerSong(index, this.arraySong , this.btn);
                this.DatabuildSong.build(this.composeArry(),this.mylist);
                this.CommandsData.eventPlayer(this.mylist,this.DatabuildSong,this.composeArry())
            })
        }
    }
}())

