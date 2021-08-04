function RenderExistData(data) {
  console.log(data)
  let objectValue = {
    User: userInput.value,
    Password: password.value,
  }
  const array = data.User.find(x => x.User == objectValue.User && x.Password == objectValue.Password);
  console.log(array)
  if (array) {
    SignInUser(objectValue);
    Okay();
  }
  else alert('usario incorrecto');
}

function Okay() {
  const dialog = document.createElement('dialog');
  dialog.className = 'dialog-register';
  dialog.style.zIndex = 2;
  const html = document.querySelector('body');
  const submit = document.createElement('input');
  const title = document.createElement('h5');
  title.innerHTML = 'has accedido correctamente! estas listo para jugar!';
  submit.type = 'button';
  submit.value = 'entrar';
  // class attributes of the element at DOM
  dialog.appendChild(title);
  dialog.appendChild(submit);
  html.insertBefore(dialog, html.childNodes[0]);
  dialog.show();
  submit.addEventListener('click', () => {
    window.location.href ='play.html';
    dialog.remove()
  });
}

function SignInUser(i) {
  return fetch('https://triviaserver.herokuapp.com/myUser',
    {
      method: 'POST',
      body: JSON.stringify(i)

    })
    .then(response => {
      console.log(response.json);
      return response.json();
    }).then(json => {
      console.log(json);
    }).catch(err => {
      console.log(err);
    });
}