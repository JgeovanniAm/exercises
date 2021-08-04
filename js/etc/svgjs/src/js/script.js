// ...... funcion que copila la información del json y la ejecuta en el dom ......//
function peticionjson(event){
  const conteinerDom = document.querySelector('#conteinerDom')
  const conteinerSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const datosjason = event.target.response;
  console.log(datosjason);
  const svgHeight = datosjason.dimensions.height;
  const svgWidth = datosjason.dimensions.width;
  console.log(svgHeight);
  console.log(svgWidth);
  conteinerSvg.setAttribute('width', `${svgHeight}`);
  conteinerSvg.setAttribute('height', `${svgWidth}`);
  console.log(conteinerSvg);
  conteinerDom.appendChild(conteinerSvg); 
  let elements = datosjason.elements;
  let typeCircle = elements[0].type;
  let typeCircle2 = elements[1].type;
  let typeRect = elements[2].type;
  console.log(typeCircle2);
  console.log(typeCircle)
  console.log(typeRect);

  // .................... Creo el svg de type circulo y hago condicional ........................//

  if(typeCircle = 'circle'){
    const circle1 = document.createElementNS('http://www.w3.org/2000/svg', `${typeCircle}`);
    const cxSvg = elements[0].attributes.cx;
    const cySvg = elements[0].attributes.cy;
    const rSvg = elements[0].attributes.r;
    const fillSvg = elements[0].attributes.fill;
    console.log(fillSvg);
    circle1.setAttribute('cx',`${cxSvg}`);
    circle1.setAttribute('cy',`${cySvg}`);
    circle1.setAttribute('fill',`${fillSvg}`);
    circle1.setAttribute('r',`${rSvg}`);
    conteinerSvg.appendChild(circle1);
  }

  // ........................ Creo el svg de type circulo y hago condicional .........................//

  if(typeCircle2 = "circle"){
    const circle2 = document.createElementNS('http://www.w3.org/2000/svg', `${typeCircle2}`);
    const cxSvg2 = elements[1].attributes.cx;
    const cySvg2 = elements[1].attributes.cy;
    const rSvg2 = elements[1].attributes.r;
    const fillSvg2 = elements[1].attributes.fill;
    console.log(fillSvg2);
    circle2.setAttribute('cx', `${cxSvg2}`);
    circle2.setAttribute('cy', `${cySvg2}`);
    circle2.setAttribute('fill',` ${fillSvg2}`);
    circle2.setAttribute('r', `${rSvg2}`);
    conteinerSvg.appendChild(circle2);
    console.log(circle2)
  }

  //........................ Creo el svg de type circulo y hago condicional .........................//

  if(typeRect ='rect'){
    const rect = document.createElementNS('http://www.w3.org/2000/svg', `${typeRect}`);
    const xSvgR = elements[2].attributes.x;
    const ySvgR = elements[2].attributes.y;
    const widthR = elements[2].attributes.width;
    const heightR = elements[2].attributes.height;
    const fillSvg2 = elements[2].attributes.fill;
    rect.setAttribute('x',`${xSvgR}`);
    rect.setAttribute('y',`${ySvgR}`);
    rect.setAttribute('height',`${heightR}`);
    rect.setAttribute('width',`${widthR}`);
    rect.setAttribute('fill',`${fillSvg2}`);
    conteinerSvg.appendChild(rect);
  }
}

// -------------------   peticiòn xmlhttprequest    --------------------- //

// json//
const request = new XMLHttpRequest();
// Agrega un event listener para el evento 'load'.
request.addEventListener('load', peticionjson);
// Define el tipo de respuesta esperada como 'json'.
request.responseType = 'json';
// Inicializa el request.
request.open('GET', '/datos-svg.json');
// Envía el request.
request.send();

// JIMMY JS //
