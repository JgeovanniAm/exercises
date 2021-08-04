API('/myUser').then(questions);

const score = document.querySelector('.score');
let wrapper = document.querySelector('.wrapper-trivia');
const level = document.querySelector('.level');
const title = document.querySelector('.name--user');
const bntWatchScore = document.querySelector('.watchEnd');
const wrapperEnd = document.querySelector('.end');
const answers = document.querySelectorAll('.answers');
const question = document.querySelector('.question');
const next = document.querySelector('.next');
const scorespan = document.querySelector('.score');
const wrapperGame = document.querySelector('.wrapper-game');
let btnScorePost = document.querySelector('.btn-score-submit');
let num = -1;
let winScore = 0;
next.className = 'btn-ui';

function loadAnimationReady() {
  const wrapperLoader = document.querySelector('.animation_loader');
  wrapperLoader.className += ' hidden';
}

// ramdon questions
class modificArray {
  static randomQuestions(myquestion, array) {
    this.array = array;
    this.myquestion = myquestion;
    for (let index = 0; index < 5; index++) {
      let i = Math.floor((Math.random() * this.myquestion.length) + 0);
      this.array.push(this.myquestion[i]);
    }
    return this.array;
  }
}
// class desorder the options (true false false)
class desorderOptions {
  mix(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      // sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      //  intercambiarlo
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  get objectDesorder() {
    return this.questions
  }
  set object(questions) {
    this.questions = questions;
    this.questions.forEach(element => this.mix(element.options));
  }
}

const classDesorder = new desorderOptions();

/**
 * 
 * @param {*} data is mi endpoint json
 *  question function APi 
 */

function questions(data) {
  const myquestion = data.myQuestions;
  const array = [];
  new modificArray();
  const questionsRandom = modificArray.randomQuestions(myquestion, array);
  classDesorder.object = questionsRandom;
  title.innerHTML = data.MyUser.User;
  level.innerHTML = data.MyUser.Level;
  loadAnimationReady()
  slide();
}


function slide() {
  if (num >= 3) next.remove();
  num++;
  next.style.display = 'none';
  changeHtmlQuestions(classDesorder.objectDesorder[num]);
  eventAllButtons();
}

function changeHtmlQuestions(array) {
  question.innerHTML = array.question;
  for (let index = 0; index < answers.length; index++) {
    answers[index].innerHTML = array.options[index].answer;
    answers[index].setAttribute('data', array.options[index].value);
  }
}

function structureEnd() {
  wrapper.remove();
  wrapperEnd.style.display = 'block';
}

function eventAllButtons() {
  answers.forEach(element => {
    element.style.backgroundColor = '#52489C';
    element.addEventListener('click', pointWin);
  });
}

// change the states buttons

function changeState() {
  answers.forEach(element => element.removeEventListener('click', pointWin));
  answers.forEach(element => {
    if (element.getAttribute('data') == 'true') element.style.backgroundColor = 'green';
    else element.style.backgroundColor = 'red';
  });
}


function pointWin(item) {
  if (num == 4) {
    bntWatchScore.style.display = 'block';
    bntWatchScore.addEventListener('click', structureEnd);
  }
  next.style.display = 'block';
  if (item.target.getAttribute('data') == 'true') {
    winScore += 5;
    collectScore()
  }
  changeState()
}

function collectScore() {
  score.innerHTML = winScore;
  API(`/score:newLevel=${scorespan.innerHTML}&User=${title.innerHTML}`);
}

btnScorePost.addEventListener('click', () => window.location.href = 'play.html')
next.addEventListener('click', slide);