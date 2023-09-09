
function drawFractal(center, vertexCount, radius , iteracion) {
    // paramos bucle //
    if(iteracion  <= 0 ){
        return
    }
    // vertextcount es el vertice del poligono regular
    let alpha = 0 ;
    // cons y sen usan radianes 
    const alphaStep = (PI*2) / vertexCount;
    const arrayVertices = [];

    beginShape()
    for(i = 0 ; i  <= vertexCount ; i++){
        const object = {
            x: center.x + Math.cos(alpha) * radius,
            y: center.y + Math.sin(alpha) * radius
        }
        // se generan los puntos vertices del poligono //
        alpha += alphaStep;
        arrayVertices.push(object)
        // subvertices de p5js //
        vertex(object.x , object.y)
    }
    endShape()
    // iterando vertices
    for(let cordenada of arrayVertices ){
        drawFractal(cordenada , vertexCount , radius *0.75 , iteracion - 1)
    }

}

function setup(){
    let canvas =  createCanvas(window.innerWidth , window.innerHeight);
    canvas.parent('portada');
}
let angle = 0 ; 
function draw(){
    translate(width/2 , height/2);
    rotate(angle) ;
    angle += 0.003;
    background(0);
    stroke(Math.abs(255 * Math.sin(angle)))
    noFill()
    drawFractal({x : 0 , y : 0}, 9 , 90 , 3)
}