const BuilData = (function () {
    const divInfo = document.querySelector('.details');
    const titleSong = document.createElement('h1');
    const Album = document.createElement('h2');
    const blockCommands = document.querySelector('.blockCommands'); divInfo.appendChild(titleSong); divInfo.appendChild(Album);

    function setClass(elem, id) {
        Album.innerHTML = `${elem[id].album}`;
        titleSong.innerHTML = `${elem[id].artits} / ${elem[id].song}`;
        blockCommands.style.background = `linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(0, 0, 0, 0.5)) ,url(${elem[id].img})`;
        Album.innerHTML = `${elem[id].album}`;
        titleSong.innerHTML = `${elem[id].artits} / ${elem[id].song}`;
    }

    return class {
        constructor(playerMusic, newArray) {
            this.playerMusic = playerMusic;
            this.itemLi;
            this.num = -1;
            this.newArray = newArray;
        }
        build(allSongsArray, listName) {
            this.listName = listName;
            this.listName.innerHTML = '';
            let id = -1;
            for (const iterator of allSongsArray) {
                id++;
                const li = document.createElement('li');
                li.innerHTML = iterator.song;
                li.id = id;
                this.listName.appendChild(li);
            }
        }
        playerSong(idItem, list, btn) {
            btn.innerHTML = '||';
            this.itemLi = idItem;
            this.list = list;
            this.playerMusic.setAttribute('src', `${this.list[this.itemLi.id].mp3}`);
            setClass(list, idItem.id);
            this.playerMusic.play();
            this.i = this.list[this.itemLi.id];
            this.itemobjectsong();
            this.num = parseInt(this.itemLi.id);
        }
        itemobjectsong() {
            this.newArray.push(this.i);
        }
        pauseSong(btn) {
            if (btn.innerHTML == '||') {
                btn.innerHTML = '▷';
                this.playerMusic.pause();
            }
            else if (btn.innerHTML == '▷') {
                btn.innerHTML = '||';
                this.playerMusic.play();
            }
        }
        slider(list, btn) {
            btn.innerHTML = '||';
            if (this.num == list.length - 1) this.num = -1;
            this.num++;
            this.playerMusic.setAttribute('src', `${list[this.num].mp3}`);
            setClass(list, this.num);
            this.playerMusic.play();
        }
        sliderReverse(list, btn) {
            btn.innerHTML = '||';
            if (this.num == 0) this.num = list.length;
            this.num--;
            this.playerMusic.setAttribute('src', `${list[this.num].mp3}`);
            setClass(list, this.num);
            this.playerMusic.play();
        }
    }
}())