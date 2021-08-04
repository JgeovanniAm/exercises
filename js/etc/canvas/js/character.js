// ***** JIMMY ***** //
// ---------------------------------------- variables del DOM ----------------------------------------  //

const titleCover = document.getElementById('titulo');
const BtnStartGame = document.getElementById('comando');
const footer = document.getElementById('footer')
const canvasArea = document.getElementById('canvasArea');
const PlayAgain = document.getElementById('GameOverBton')
const GameOverCover = document.getElementById('puntajealperder')
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const buttom = document.getElementById('boton');
const scoreEnd = document.getElementById('scorePlayer')
const score = document.getElementById('marcadorscore')
const cover = document.getElementById('portada')

// ---------------------------------------- audio ---------------------------------------- //

const music = new Audio('mp3/audio.mp3');
const music2 = new Audio('mp3/audio2.mp3');
const ArrayMusic = [music,music2];

// ---------------------------------------- ancho del canvas  ----------------------------------------  //

canvasArea.width = window.innerWidth;
canvasArea.height = window.innerHeight + 20;

// ---------------------------------- crea el contexto en 2D para el canvas -----------------------------  //

const canvasContext = canvasArea.getContext('2d');

// -------------------------------- variables para el caracter principal -------------------------------- //

const x = canvasArea.width / 2;
const y = canvasArea.height / 1.5;
const startPoint = 0;
const endPoint = Math.PI * 2;
const radius = 8;
const xRightVelocity = 0;
const xLeftVelocity = 0;
const color = 'purple';
const Fill = 'black';

// --------------------------- variables de los caracteres de los enemigos ----------------------------- //

const xEnemies = canvasArea.width ;
const yEnemies = canvasArea.height ;
const startPointEnemies = 0;
const endPointEnemies = Math.PI * 2;
const radiusEnemies = 0;
const colorEnemies = 'yellow';
const FillEnemies = 'rgba(114, 138, 7, 0.5)';
const gravityEnemies = 0;
const vyEnemies = 0;
/* yi detiene y restaura y no deja que se siga iterando g & y  e inicia otravez  en 0 */
const yiEnemies = 0;

// ------------------ parámetros del caracter y variables con sus caracteres ------------------------------ //

function MainCharacter(xKey, yKey, radiusKey, startPointKey, endPointKey, xLeftVelocityKey, xRightVelocityKey, colorKey , FillKey) {
  this.xKey = xKey;
  this.yKey = yKey;
  this.radiusKey = radiusKey;
  this.startPointKey = startPointKey;
  this.endPointKey = endPointKey;
  this.xLeftVelocityKey = xLeftVelocityKey;
  this.xRightVelocityKey = xRightVelocityKey;
  this.colorKey = colorKey;
  this.FillKey = FillKey;

  // -------------- funcion que dibuja el objeto y toma los parámetrosde MainCaracter -----------------  //

  this.drawAnimation = function () {
    canvasContext.beginPath();
    canvasContext.arc(this.xKey, this.yKey, this.radiusKey, this.startPointKey, this.endPointKey, this.xRightVelocityKey, this.xLeftVelocityKey, this.colorKey, this.FillKey ,false);
    canvasContext.strokeStyle = this.colorKey;
    canvasContext.stroke();
    canvasContext.lineWidth = 3;
    canvasContext.fillStyle = this.FillKey;
    canvasContext.fill();
  };

  // --------------------------- función que hace movimento de izquierda a derecha ----------------------  //

  this.updatedAnimation = function () {
    this.xKey += this.xRightVelocityKey;
    this.xKey -= this.xLeftVelocityKey;
    this.drawAnimation();
  };
}

// -------------------------------- aspectos del objecto enemigo -------------------------------------  //

function MainCharacterEnemies(xKeyEnemies, yKeyEnemies, radiusKeyEnemies, startPointKeyEnemies, endPointKeyEnemies, colorKeyEnemies ,gravitykeyEnemies, vykeyEnemies, yikeyEnemies , FillKeyEnemies) {
  this.xKeyEnemies = xKeyEnemies;
  this.yKeyEnemies = yKeyEnemies;
  this.radiusKeyEnemies = radiusKeyEnemies;
  this.startPointKeyEnemies = startPointKeyEnemies;
  this.endPointKeyEnemies = endPointKeyEnemies;
  this.colorKeyEnemies = colorKeyEnemies;
  this.gravitykeyEnemies = gravitykeyEnemies;
  this.vykeyEnemies = vykeyEnemies;
  this.yikeyEnemies = yikeyEnemies;
  this.FillKeyEnemies = FillKeyEnemies;

  // ---------------  funcion que dibuja el objeto enemigo y toma los parámetrosde MainCaracter --------------  //

  this.drawAnimationEnemies = function () {
    canvasContext.beginPath();
    canvasContext.arc(this.xKeyEnemies, this.yKeyEnemies, this.radiusKeyEnemies, this.startPointKeyEnemies, this.endPointKeyEnemies, this.colorKeyEnemies, this.gravitykeyEnemies, this.vykeyEnemies, this.yikeyEnemies , this.FillKeyEnemies , false);
    canvasContext.strokeStyle = this.colorKeyEnemies;
    canvasContext.stroke();
    canvasContext.fillStyle = this.FillKeyEnemies ;
    canvasContext.fill();
  };

  // -------------------------------  Función que hace la función del enemigo --------------------------------  //

  this.updatedAnimationEnemies = function () {
    this.yKeyEnemies += this.gravitykeyEnemies;
    if(this.yKeyEnemies + this.radiusKeyEnemies > window.innerHeight - 60 ){
      this.yKeyEnemies = this.yikeyEnemies;
      this.ykeyEnemies += this.gravitykeyEnemies ;
      this.xKeyEnemies = Math.random() * window.innerWidth;

      // puntos del marcador 
        timeseconds += 3 ;
        score.innerHTML = timeseconds;

    }
    this.drawAnimationEnemies();

    // detecta la colicion entre los elementos
    collipsion();
  };
}

function gravityRandom(){
  for(const i of enemies){
    i.gravitykeyEnemies = (Math.random() * 4) + 1.7;
    console.log(i.gravitykeyEnemies);
  }
}

const newCharacter = new MainCharacter(x, y, radius, startPoint, endPoint, xLeftVelocity, xRightVelocity, color, 'purple' , false);
const newCharacteEnemy = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies, gravityEnemies, vyEnemies, yiEnemies, FillEnemies,false);
const newCharacteEnemy2 = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies, gravityEnemies, vyEnemies, yiEnemies,FillEnemies, false);
const newCharacteEnemy3 = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies, gravityEnemies, vyEnemies, yiEnemies, FillEnemies , false);
const newCharacteEnemy4 = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies,gravityEnemies, vyEnemies, yiEnemies, FillEnemies ,false);
const newCharacteEnemy5 = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies,gravityEnemies, vyEnemies, yiEnemies, FillEnemies , false);
const newCharacteEnemy6 = new MainCharacterEnemies(Math.random()* window.innerWidth, 0, 14, startPointEnemies, endPointEnemies, colorEnemies, gravityEnemies, vyEnemies, yiEnemies, FillEnemies , false);

// ----------------------------------------  array con todos los enemigos ----------------------------------------  //

const enemies = [newCharacteEnemy,newCharacteEnemy2,newCharacteEnemy3,newCharacteEnemy4,newCharacteEnemy5,newCharacteEnemy6]

// ------------------  limpia el movimento del canvas y hace funcion del updateAnimationEnemies ---------------------  //

let frame ;

function animateDraws() {
  frame = requestAnimationFrame(animateDraws)
  canvasContext.clearRect(0, 0, canvasArea.width, canvasArea.height);
  newCharacter.updatedAnimation();
  // array con todos los enemigos ajecutandoles una funcion
  for (i of enemies){
    i.updatedAnimationEnemies();
  }
}

// ----------------------------------------  funcionalidades ----------------------------------------  //

leftBtn.addEventListener('mousemove' ,  () => {
  newCharacter.xRightVelocityKey = 0;
  newCharacter.xLeftVelocityKey = 3.5;
});

rightBtn.addEventListener('mousemove',  () => {
  newCharacter.xRightVelocityKey = 3.5;
  newCharacter.xLeftVelocityKey = 0;
});

// --------- funcion que se encarga de que se mueva solo , SÍ el usuario deja de presionar o usar los botones -------------  //

setInterval( () => {

  if (newCharacter.xKey + newCharacter.radiusKey > window.innerWidth - newCharacter.radiusKey) {
    newCharacter.xRightVelocityKey = 0;
    newCharacter.xLeftVelocityKey = 5;
  } else if (newCharacter.xKey - newCharacter.radiusKey < (window.innerWidth - window.innerWidth + newCharacter.radiusKey)) {
    newCharacter.xRightVelocityKey = 5;
    newCharacter.xLeftVelocityKey = 0;
  }

}, 1);

// ----------- empieza a funcionar y ejecutar el juego con el setimeout al precionar el boton de la portata --------- //

boton.addEventListener('click', startGame  );

let timeseconds = 0;
let time;

// ------------------------- Funcion que inicia el juego con stetimeout -------------------------------------- //

function startGame (){
  setTimeout( () =>{
    cover.style.display = 'none';
    gravityRandom();
    animateDraws();
    ArrayMusic;
    const num =  Math.round(Math.random() * 1)
    const MusicRandon = ArrayMusic[num]
    MusicRandon.play();
    time = setInterval( () => {
      level();
    } , 2000);
  }, 20);
}


// ------------ funcion con todo los niveles; la cual se obtiene o se ejcuta conforme el score --------------- //

function level () {

  for (const i of enemies){
    if(timeseconds == 400 || timeseconds >= 400){
      newCharacter.radiusKey = 20;
      canvasArea.style.setProperty("background-color", "rgb(5, 1, 39)")
      i.radiusKeyEnemies = 3;
      i.gravitykeyEnemies = 0
      i.gravitykeyEnemies =  (Math.random() * 4) + 2;
    };

    if(timeseconds == 1200 || timeseconds >= 1200){ 
      newCharacter.radiusKey = 9
      canvasArea.style.setProperty("background-color", "rgb(32, 0, 0)")
      i.radiusKeyEnemies = 19;
      i.FillKeyEnemies = 'black';
      i.yikeyEnemies = 0;
      i.gravitykeyEnemies =  (Math.random() * 6)+0;
    };

    if(timeseconds == 1900 || timeseconds >= 1900){ 
      newCharacter.radiusKey = 14;
      newCharacter.FillKey = 'rgb(5, 1, 39)';
      canvasArea.style.setProperty("background-color", "rgb(1, 67, 60)")
      i.radiusKeyEnemies = 3;
      i.FillKeyEnemies = 'black';
      i.colorKeyEnemies = 'black';
      i.yikeyEnemies = 0;
      i.yikeyEnemies += (i.gravitykeyEnemies =  (Math.random() * 5)+2);
    };

    if(timeseconds == 2770 || timeseconds >= 2770){ 
      newCharacter.radiusKey = 13;
      canvasArea.style.setProperty("background-color", "black")
      i.radiusKeyEnemies= 19;
      i.FillKeyEnemies = 'black'
      i.colorKeyEnemies = 'rgb(1, 67, 60)';
      i.yikeyEnemies = 0;
      i.yikeyEnemies += (i.gravitykeyEnemies =  (Math.random() * 8.5)+0);
    };
  }
}

function endgame () {
    window.cancelAnimationFrame(frame)
    GameOverCover.style.display = 'block';
    GameOverCover.style.opacity = 0.8;
    GameOverCover.style.setProperty("z-index" , 5);
    GameOverCover.style.setProperty("justify-content","center");
    GameOverCover.style.setProperty("background-color","black");
    GameOverCover.style.setProperty("align-content","center");
    cover.style.display = 'block';
    cover.style.setProperty("z-index" , 5)
    titleCover.style.display = 'none';
    BtnStartGame.style.display = 'none';
    footer.style.display = 'none';
    scoreEnd.innerHTML = timeseconds;
    PlayAgain.addEventListener('click', ()=>{
      window.location.replace('index.html');
    });
}

function collipsion () {

  for (const i of enemies){
    if(newCharacter.yKey - newCharacter.radiusKey <= i.yKeyEnemies + i.radiusKeyEnemies 
      && 
      newCharacter.yKey + newCharacter.radiusKey >= i.yKeyEnemies - i.radiusKeyEnemies 
      && 
      (newCharacter.xKey - newCharacter.radiusKey) - (i.xKeyEnemies + i.radiusKeyEnemies) <= 0
      && 
      (i.xKeyEnemies - i.radiusKeyEnemies) - (newCharacter.xKey + newCharacter.radiusKey)  <= 0
      ){
        // cuando chocan se ejecuta la función que finaliza el juego 
        endgame()
    }
  }
}
