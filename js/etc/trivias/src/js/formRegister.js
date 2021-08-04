// loader animation view#
function loadAnimation() {
  const wrapperLoader = document.querySelector('.loader');
  wrapperLoader.className += ' hidden';
}

const btnSignin = document.querySelector('.sign-in');
const btnSignup = document.querySelector('.sign-up');
const userInput = document.createElement('input');
userInput.type = 'text';
userInput.placeholder = 'user';
const password = document.createElement('input');
password.type = 'password';
password.placeholder = 'password';

// class attributes
userInput.setAttribute('class', 'inputForm');
password.setAttribute('class', 'inputForm');

window.addEventListener('load', loadAnimation);
btnSignup.addEventListener('click', modalComponents);
btnSignin.addEventListener('click', modalComponents);


function modalComponents(event) {
  const i = event.target;
  const title = document.createElement('h1');
  title.innerHTML = i.innerHTML;
  // class 
  title.setAttribute('class', 'titleForm');
  createModal(userInput, password, title);
}

function createModal(_user, _password, _title) {
  const dialog = document.createElement('dialog');
  dialog.className = 'dialog-register';
  const html = document.querySelector('body');
  const cancel = document.createElement('button');
  const form = document.createElement('form');
  const submit = document.createElement('input');
  submit.type = 'button';
  submit.value = 'entrar';
  cancel.innerHTML = 'cancel';

  // class attributes of the element at DOM
  form.setAttribute('class', 'formLogin');
  dialog.setAttribute('class', 'dialogForm');
  cancel.setAttribute('class', 'cancelBtn btn-ui');
  submit.setAttribute('class', 'submitBtn btn-ui');

  const array = [_title, _user, _password, submit];
  array.forEach(element => form.appendChild(element));
  dialog.appendChild(cancel);
  dialog.appendChild(form);
  html.insertBefore(dialog, html.childNodes[0]);
  dialog.show();
  submit.addEventListener('click', () => requestDataRegister(_title.innerHTML, dialog));
  cancel.addEventListener('click', () => cancelModalOption(dialog));
}

function requestDataRegister(event, item) {
  if (event == 'sign-up') API('/dataUser').then(RenderData);
  else if (event == 'sign-in') API('/dataUser').then(RenderExistData);
  item.close();
}

function cancelModalOption(item) {
  item.close();
  item.remove();
}

