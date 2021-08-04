const btnInfo = document.querySelector('#infodev');
const newQ = document.querySelector('#newQ');
const titleUser = document.querySelector('.name--user');
const titleLevel = document.querySelector('.level');
const btnPlay = document.querySelector('#btn-play');
const wrapperViewplay = document.querySelector('.container2');
const wrapperGmae = document.querySelector('.wrapper-game')
const body = document.querySelector('body');
const btnBack = document.querySelector('.btn--back');

btnInfo.addEventListener('click', DialogInfoComponent);
newQ.addEventListener('click', FormNewQuestion);
btnPlay.addEventListener('click', () => {
  wrapperViewplay.style.display = 'none';
  btnBack.style.display ='none';
  wrapperGmae.style.display = 'block';

})

API('/myUser').then(RenderViewPlay);

function RenderViewPlay(data) {
  titleUser.innerHTML = data.MyUser.User;
  titleLevel.innerHTML = data.MyUser.Level;
  btnBack.style.display = 'block';
}

function DialogInfoComponent() {
  const wrapperInfoDev = document.createElement('div');
  const wrapperInfoDev_title = document.createElement('h3');
  const wrapperInfoDev_text = document.createElement('p');
  const wrapperInfoDev_title2 = document.createElement('h3');
  const wrapperInfoDev_text2 = document.createElement('p');
  const close = document.createElement('button');
  // className
  close.innerHTML = 'X';
  close.className = 'close--btn btn-ui';
  wrapperInfoDev.className = 'wrapper--info-dev';
  wrapperInfoDev_title.className = 'info--titles';
  wrapperInfoDev_title2.className = 'info--titles';
  wrapperInfoDev_title.innerHTML = 'Acerca del juego';
  wrapperInfoDev_text.innerHTML = 'Este juego quiere ayudar a memorizar conceptos básicos y vocabulario técnico, que al inicio de los estudios es un poco complejo de recordar y que al mismo tiempo son importantes.'
  wrapperInfoDev_title2.innerHTML = 'Acerca de los desarrolladores';
  wrapperInfoDev_text2.innerHTML = 'El juego fue diseñado y desarrollado por Jimmy Alvarez y Nycoll Soto (Estudiantes del CETAV) con el fin de ayudar a futuras generaciones.'
 
  const infoDevArrays = [close, wrapperInfoDev_title, wrapperInfoDev_text, wrapperInfoDev_title2, wrapperInfoDev_text2];
  infoDevArrays.forEach(element => wrapperInfoDev.appendChild(element));
  body.insertBefore(wrapperInfoDev, body.childNodes[0]);
  close.addEventListener('click', () => wrapperInfoDev.remove());
}

function FormNewQuestion() {
  const close = document.createElement('button');
  close.innerHTML = 'X';
  close.className = 'close--btn';
  const wrapperFormQuestion = document.createElement('dialog');
  const form = document.createElement('form');
  const formquestion = document.createElement('div');
  const selectAnswers = document.createElement('div');
  const textAreaQuestion = document.createElement('textarea');
  const title = document.createElement('h3');
  title.innerHTML = 'Puedes crear tus preguntas !!'
  textAreaQuestion.id = 'newQuestion';
  textAreaQuestion.placeholder = 'Pregunta';

  const textAreaAnswerCorrect = document.createElement('textarea');
  const textAreaAnswerIncorrect1 = document.createElement('textarea');
  const textAreaAnswerIncorrect2 = document.createElement('textarea');

  const submit = document.createElement('input');
  submit.type = 'button';
  submit.value = 'enviar';
  submit.className = 'btn-ui';
    
  textAreaAnswerCorrect.id = 'answerCorrect';
  textAreaAnswerCorrect.placeholder = 'Respuesta Correcta';

  textAreaAnswerIncorrect1.id = 'answerIncorrect1';
  textAreaAnswerIncorrect1.placeholder = 'Respuesta Incorrecta #1';

  textAreaAnswerIncorrect2.id = 'answerIncorrect2';
  textAreaAnswerIncorrect2.placeholder = 'Respuesta Incorrecta #2';

  form.id = 'question';
  wrapperFormQuestion.className = 'form--questions';
  formquestion.className = 'wrapper--form-question';
  selectAnswers.className = 'wrapper--form--Select';
  formquestion.appendChild(title);
  formquestion.appendChild(textAreaQuestion);
  const arrayIncorrectAnswers = [textAreaAnswerCorrect, textAreaAnswerIncorrect1, textAreaAnswerIncorrect2]
  arrayIncorrectAnswers.forEach(element => selectAnswers.appendChild(element));

  form.appendChild(formquestion);
  form.appendChild(selectAnswers);
  form.appendChild(submit);

  const body = document.querySelector('body');
  const newQuestions = [close, form];
  newQuestions.forEach(element => wrapperFormQuestion.appendChild(element));
  body.insertBefore(wrapperFormQuestion , body.childNodes[0]);

  wrapperFormQuestion.show();

  close.addEventListener('click', () => wrapperFormQuestion.remove());
  submit.addEventListener('click', ()=> {
    if (textAreaQuestion.value == '' || textAreaAnswerCorrect.value == '' || textAreaAnswerIncorrect1.value == '' || textAreaAnswerIncorrect2.value == '') alert('error rellene los campos')
    else {
      let Question = {
        id: 0,
        question: textAreaQuestion.value,
        options: [
          {
            value: true,
            answer: textAreaAnswerCorrect.value
          },
          {
            value: false,
            answer: textAreaAnswerIncorrect1.value
          },
          {
            value: false,
            answer: textAreaAnswerIncorrect2.value
          }
        ]
      }
      RenderQuestion(Question);
    }
  });
}

