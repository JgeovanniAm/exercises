function RenderData(data) {
  console.log(data)
  if (userInput.value == '' && password.value == '') alert('porfavor escriba su nombre y contraseña');
  else {
    let objectValue = {
      User: userInput.value,
      Password: password.value,
      Level: 0,
      id: 0,
    }
    const array = data.User.find(x => x.User == objectValue.User);
    if (array) alert('no es valido su nombre de usario');
    else {
      PostNewUser(objectValue);
      OkayUp();
    }
  }
}

function OkayUp() {
  const dialog = document.createElement('dialog');
  dialog.className = 'dialog-register';
  dialog.style.zIndex = 2;
  const html = document.querySelector('body');
  const submit = document.createElement('input');
  const title = document.createElement('h5');
  title.innerHTML = 'se ha creado su usuario! acceda a su nueva cuenta para jugar!';
  submit.type = 'button';
  submit.value = 'entrar';
  // class attributes of the element at DOM
  dialog.appendChild(title);
  dialog.appendChild(submit);
  html.insertBefore(dialog, html.childNodes[0]);
  dialog.show();
  submit.addEventListener('click', () => {
    window.location.href ='index.html';
    dialog.remove()
  });
}

function PostNewUser(i) {
  return fetch('https://triviaserver.herokuapp.com/register',
    {
      method: 'POST',
      body: JSON.stringify(i)
    })
    .then(response => {
      console.log(response.json);
      return response.json();
    })
    .then(json => {
      console.log(json);
    })
    .catch(err => {
      console.log(err);
    });
}
