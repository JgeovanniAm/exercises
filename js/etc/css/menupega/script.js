let menu = document.getElementById('menu');

//calcular distancia//
let altura =(menu.offsetTop);
window.addEventListener('scroll', function(){
    if(window.pageYOffset>altura){
        menu.classList.add('fixed')
    }else{
        menu.classList.remove('fixed');
    }
})
// si quiero usar o aplicar para el header solo se le pone el fixed position en ccs sin js //