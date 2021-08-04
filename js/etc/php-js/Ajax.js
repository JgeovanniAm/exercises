function AjaxData() {
    let request = new XMLHttpRequest();
    //propiedadES del XMLHttpRequest 
    /*onreadystatechange: Sirve para definir una función que será llamada automáticamente cada vez que cambie la propiedad readyState del objeto.
    readyState :Contiene un valor numérico entero que representa la situación del intercambio de datos a través del objeto.

    if (xmlhttp.readyState==4) indica que se ha recibido la información solicitada del servidor.

    Puede tomar los siguientes valores:

    0: no inicializado. Indica que no se ha abierto la conexión con el servidor (no se ha llamado a open)

    1: conexión con servidor establecida. Indica que se ha abierto la conexión pero todavía no se ha enviado la petición (no se ha llamado a send)

    2: recibida petición en servidor. Indica que el servidor ya ha recibido la petición (se ha llamado a send)

    3: enviando información. Se está enviando la información por parte del servidor, todavía no se ha completado la recepción.

    4: completado. Se ha recibido la información del servidor y está lista para operar con ella.

    status:Código numérico entero enviado por el servidor que indica el tipo de respuesta dada a la petición. Puede tomar valores como:

    200: respuesta correcta.

    404: no encontrado.

    500: error interno del servidor.*/

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            document.getElementById('chat').innerHTML = request.responseText;
        }
    }
    request.open('GET', 'chat.php', true);
    request.send();
}
setInterval( function (){
    AjaxData();
},200);
const body = document.querySelector(body);
body.addEventListener('load',AjaxData);