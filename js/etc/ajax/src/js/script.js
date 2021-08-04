// variables globales
let botonAgregar= document.querySelector('#botonAgregar');//console.log(botonAgregar);
let botonTarea= document.querySelector('#botonTarea');//console.log(botonTarea);
let botonDate= document.querySelector('#botonDate');//console.log(botonDate);
let lista=document.querySelector('#ul');//console.log(lista);
let body=document.getElementById('datos');
let filterBoton = document.querySelector('#filter');
let tareas=[];
let tareas2=[];
let audioPage = new Audio('mp4/ASKING ALEXANDRA - Gone.mp4');

// -------------------       --------------------- //

//activo el sonido en un evento con el body
body.addEventListener("click", function() {
  audioPage.play();
});

// -------------------       --------------------- //

//funcion que agrega al JSON

function agregarjson(event){
  const eventoresponse = event.target.response;
  for ( const element of eventoresponse) {
    let li=document.createElement('li');
    li.innerHTML+=''+element.taks+'  /  '+element.dueDate+'  /  ' + '  ';
    let inputCheck2=document.createElement('input');
    inputCheck2.setAttribute("type", "checkbox");
    li.appendChild(inputCheck2);
    lista.appendChild(li);

    inputCheck2.addEventListener('click', function(){
      if(inputCheck2.checked){
        objeto1.complete = true;
        li.className='listo';
      }else{
        objeto1.complete = false;
        li.className='';
      }
    });

    let objeto1={
      taks: element.taks,
      complete: false,
      dueDate: new Date(Date.parse(element.dueDate)),
    }

    //  oculto los archivos en true o complete=true
    filterBoton.addEventListener('click', function(){
      if(filterBoton.checked){
        tareas.filter(function(){
        if(objeto1.complete){
          li.className='oculto'
        }
        });
      }else if(!filterBoton.checked){
        tareas.filter(function(){
          if(objeto1.complete){
            li.className='listo'
          }
        });
      }
    });
    tareas.push(objeto1);console.log(tareas);
  }
  botonAgregar.addEventListener('click', agregodom);
}

// -------------------       --------------------- //

//CONCATENAR TAREAS JSON DOM//
tareas2= tareas2.concat(tareas);
//funcion que agrega listas al dom

// -------------------       --------------------- //

function agregodom(){
  let li2=document.createElement('li');
  li2.innerHTML+=''+botonTarea.value+' / '+botonDate.value+' / ' + '  ';
  let inputCheck=document.createElement('input');
  inputCheck.setAttribute("type", "checkbox");
  //verificar checkbox complete true o flase//
  inputCheck.addEventListener('click', function(){
    if(inputCheck.checked){
      objeto2.complete = true;
      li2.className='listo';
    }else{
      objeto2.complete = false;
      li2.className='';
    }
  });
  li2.appendChild(inputCheck);
  lista.appendChild(li2);
  let objeto2={
    taks: botonTarea.value,
    complete: false,
    dueDate: new Date(Date.parse(botonDate)),
  }
  filterBoton.addEventListener('click', function(){
    //  oculto los archivos en true o complete=true
    tareas2.filter(function() {
      if(filterBoton.checked){
        tareas2.filter(function(){
        if(objeto2.complete){
          li2.className='oculto';
        }
        });
      }else if(!filterBoton.checked){
        tareas2.filter(function(){
          if(objeto2.complete){
            li2.className='listo';
          }
        });
      }
    })
  });
  tareas2.push(objeto2);
}

// -------------------       --------------------- //

// json//
const request = new XMLHttpRequest();
// Agrega un event listener para el evento 'load'.
request.addEventListener('load', agregarjson);
// Define el tipo de respuesta esperada como 'json'.
request.responseType = 'json';
// Inicializa el request.
request.open('GET', '/data.json');
// Envía el request.
request.send();

// JIMMY JS //
