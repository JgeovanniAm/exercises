const waitArray = (function () {
    const audioTag = document.querySelector('.music-player'),
        list = document.querySelector('.all-song__list-song'),
        myList = document.querySelector('.all-song__favorite-list'),
        btnPause = document.querySelector('#stop'),
        arrayDataAllsong = [],
        dataAllsong = new BuilData(audioTag, arrayDataAllsong);
    function AllElementsList() {
        dataAllsong.build(Listsong, list);
        mediator(list, myList);
    }
    class commands {
        eventPlayer(listNew, classBuild, allSongs) {
            this.listNew = listNew; this.classBuild = classBuild; this.allSongs = allSongs;
            const blockCommands = document.querySelector('.blockCommands'),
                btnNext = document.querySelector('.next'),
                btnBack = document.querySelector('.back'),
                itenChild = this.listNew.children;
            for (const iterator of itenChild) {
                iterator.addEventListener('click', () => {
                    blockCommands.style.opacity = 1;
                    this.classBuild.playerSong(iterator, this.allSongs, btnPause);
                    btnPause.addEventListener('click', () => { this.classBuild.pauseSong(btnPause); })
                    btnNext.addEventListener('click', () => { this.classBuild.slider(this.allSongs, btnPause); })
                    btnBack.addEventListener('click', () => { this.classBuild.sliderReverse(this.allSongs, btnPause); })
                });
            }
        }
    }
    function mediator(list, myList) {
        const commandsData = new commands();
        const child = list.children;
        const dataDrop = new DropData(child, myList, Listsong, dataAllsong, btnPause, commandsData);
        dataDrop.eventStart();
    }
    const mainContentSong = document.querySelector('.main-content'),
        ContentImport = document.querySelector('.import'),
        btnSongMain = document.querySelector('.tabsContent__songs'),
        btnImport = document.querySelector('.tabsContent__import'),
        btnSave = document.querySelector('.btn-save'),
        inputName = document.querySelector('#name'),
        inputArtis = document.querySelector('#artist'),
        inputAlbum = document.querySelector('#album'),
        inputImage = document.querySelector('#image'),
        inputMp3 = document.querySelector('#mp3');
    function openWindowImport() {
        ContentImport.style.display = 'block';
        mainContentSong.style.display = 'none';
    }
    function openWindowSongs() {
        ContentImport.style.display = 'none';
        mainContentSong.style.display = 'block';
    }
    function insertNewSong() {
        const object =
        {
            artits: inputName.value,
            song: inputArtis.value,
            album: inputAlbum.value,
            img: inputImage.value,
            mp3: inputMp3.value
        };
        Listsong.push(object);
       // console.log(Listsong)
        dataAllsong.build(Listsong, list);
        mediator(list, myList);
    }
    btnSave.addEventListener('click', insertNewSong);
    btnImport.addEventListener('click', openWindowImport);
    btnSongMain.addEventListener('click', openWindowSongs);
    AllElementsList();
}())
