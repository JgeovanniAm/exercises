const btnSingUp = document.querySelector('#btn');
const user = document.querySelector('#sign-up');
const passWord = document.querySelector('#password-sign-up');
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
        Level: 0,
        id: 0,
    }
    const array = data.User.find(x => x.User == objectValue.User);
    if (array) alert('no es valido su nombre de usario');
    else {
        PostNewUser(objectValue);
        window.location.replace('index2.html');
    }
}


function PostNewUser(i) {
    return fetch(`http://localhost:3000/register`,
        {
            method: 'POST',
            body: JSON.stringify(i)
            
        }).then(response => {
            console.log(response.json);
            return response.json();
        }).then(json => {
            console.log(json);
        }).catch(err => {
            console.log(err);
        });
}

btnSingUp.addEventListener('click', function (event) {
    API('/dataUser').then(RenderData)
})



