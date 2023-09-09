const btnSingIn = document.querySelector('#btn2');
const user = document.querySelector('#sign-in');
const passWord = document.querySelector('#password-sign-in');
const form = document.querySelector('.form-sign-in');

async function API(url) {
    const base = 'http://localhost:3000';
    const response = await fetch(base + url);
    const data = await response.json();
    return data;
}

function RenderData(data) {
    let objectValue = {
        User: user.value,
        Password: passWord.value,
    }
    
    const array = data.User.find(x => x.User == objectValue.User &&  x.Password == objectValue.Password);
    if (array) API(`/User/User=${objectValue.User}&Password=${objectValue.Password}`).then(PLAY);
    else {
        alert('usario incorrecto')
        //window.location.replace('index2.html');
    }
}

btnSingIn.addEventListener('click', function (event) {
    API('/dataUser').then(RenderData)
})

function PLAY(data){
    console.log(data)
}