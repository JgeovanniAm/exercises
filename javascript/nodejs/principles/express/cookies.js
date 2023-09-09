//cookies session
// npm i cookie-parser cookie-session
/* middlewares en el framework web Express de Node.js.
  son moudlos plug y play
  filtros / proveedores.
  // callback que recibe parámetros req , res , next (next es para terinar mi tarea y conectar otro middleware)
*/
/* express.static(directorio)
// cachea los ficheros 
la variable global _dirname contiene el directorio donde reside nuestro script
*/
const express = require('express');
const app = express();
const cookieParse = require('cookie-parser');
const cookieSession = require('cookie-session')
app.listen(5000);
console.log('hola puerto 3000');
// cookieParse
app.use( cookieParse() );
// cookieSession
app.use( cookieSession({ secret: "secreto" }) )

app.get('/', (req, res) => {
  let n = 0;
  req.session.visitas || (req.session.visitas = 0)
  n = req.session.visitas++
  res.end(`<h1> hola jimmy node js me has viistado ${n}  </h1>`)
})