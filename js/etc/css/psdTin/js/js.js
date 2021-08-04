/* Programa que el proposito es de ser unagaleria 
que se reproduce en cierto tiempo con setInterval*/

// ------ declaro las varibales -----//
const conteinerslideshow= document.querySelector('#slideshow');//console.log(conteinerslideshow);
const bloqueheader = document.querySelectorAll('.oculto');
const botones = document.querySelectorAll('#bolas')//console.log(botones);
let item = -1;
// ---------- Hago todos los bloques en modo oculto con ClassName ---------- //
function ClassName (){
    for(let i of bloqueheader){
        i.className = 'oculto';//console.log(elementos[i])
    }
};

// -------Avanza o se itera cada elemento dependiendo del click y se ejecuta la clase de mostrar --------//
function siguiente (){
    ClassName();
    if (item <= bloqueheader.length){
        bloqueheader[item]= bloqueheader[item+1]
        item++;
        bloqueheader[item].className='mostrar';
        if(item>=2){
            item=-1;
        }
    }//console.log(elementos[item])
};
setInterval(siguiente,2000);

// ---------- Pograma que hace que el panel del menú version tablet y movil se abra  ----------//

let boton = document.querySelector('.inputConteinerMenúTablet');
let botonCerrar = document.querySelector('.inputConteinerMenúTablet2');
let panel = document.querySelector('.conteinerMenuTablet');
// ------ eventos ---- //
boton.addEventListener('click' , () => {
    panel.className='open';
});
botonCerrar.addEventListener('click' , () => {
    panel.className='conteinerMenuTablet';
});