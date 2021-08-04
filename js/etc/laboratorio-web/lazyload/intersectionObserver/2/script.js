const divs = document.querySelectorAll('#wrapper > div');
const wrapper = document.querySelector('#wrapper');

/**
 * 
 * @param {*} entries my elemento
 * @param {*} observer
 *  @param {*} isIntersecting es una propiedad del IntersectionObserver y me indica si hay intersection
 *  @param {*} intersectionRatio me da el resultado del radio de la intersection con el viewport 
 * 
 */

// funcion que verifica la interseccion

function observerMyitem( entries , observer){
    entries.forEach(item => {
        if(item.isIntersecting){
            item.target.classList.add("show");
            console.log('load')
        }
    });
}

// Crear el observer
// es una clase que recibe un calback y un object que recibe root donde le paso como vlor mi wrapper de mis elementos
// threshold es la visibilidad de mi elemento y me da la interseccion entre el 0 y 1;

const observerClass = new IntersectionObserver(observerMyitem,{
    root:wrapper,
    threshold:.5
})

// pongo a observar mis elementos

divs.forEach(element => {
    observerClass.observe(element)
});