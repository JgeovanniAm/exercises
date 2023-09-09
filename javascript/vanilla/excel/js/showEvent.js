const clearBtn = document.querySelector('.clear');
let btnInfo = document.querySelector('.info');
clearBtn.addEventListener('click', modalFunction);
console.log(btnInfo)
function modalFunction() {
    const title = document.createElement('h1');
    const p = document.createElement('p');
    const btnAccept = document.createElement('button');
    const btnCancel = document.createElement('button');
    btnAccept.innerHTML = 'Accept';
    btnCancel.innerHTML = 'Cancel';
    title.innerHTML = 'Attention!';
    p.innerHTML = 'Are you sure erase local storage?';
    createModal(title,p,btnAccept,btnCancel);
    btnAccept.addEventListener('click',function(){
        localStorage.clear();
        window.location.replace('index.html');
    })
}
btnInfo.addEventListener('click', modalInfo);

function modalInfo(){
    const title = document.createElement('h1');
    const p = document.createElement('p');
    const btnAccept = document.createElement('button');
    const btnCancel = document.createElement('button');
    btnAccept.style.display = 'none';
    btnCancel.innerHTML = 'cerrar';
    title.innerHTML = 'welcome!';
    p.innerHTML = 'In this application can you erase or add row and columns. '+ '<br>' +' You can modify text and save it.' + '<br>'  + 'Also you can save your data in localStorage and clear your data if you wish';
    createModal(title,p,btnAccept,btnCancel);
}

function createModal(_title, _message,_btnAccept,_btnCancel) {
    const dialog = document.createElement('dialog');
    const html = document.querySelector('html');
    html.appendChild(dialog);
    dialog.show();
    _message.classList = 'messageDialog';
    _title.classList = 'titleDialog';
    dialog.classList ='dialogPage';
    dialog.appendChild(_title);
    dialog.appendChild(_message);
    dialog.appendChild(_btnAccept);
    dialog.appendChild(_btnCancel);
    _btnCancel.addEventListener('click',() =>{dialog.close()})
}
