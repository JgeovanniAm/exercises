'use strict'
// Express Api minimalista
// express manejo de rutas y  middlewares (function: es un ciclo de peticiones y respuestas)
// app.get app.post app.use app.update app.delete app.set (establece el puerto que va escuchar)
// res.end res.send

/* manejo de rutas
// ejemplo localhost:3000/user/:name
  req.params va agarrar mi path y me extrae el name
// ejemplo localhost:3000/search=value
  req.query 
*/

// res.redirect
// res.json para mis endpoints XD
// res.render 

const express = require('express');
const app = express();

app.get('/' , (req,res)=>{
  res.end('<h1> hola <br> jimmy </h1>')
})

app.get('/user/:id/:name' , (req,res)=>{
  res.end(`<h1> hola <br> node a id:${req.params.id} / user: ${req.params.name} </h1>`)
})

// query 

app.get('/search' , (req,res)=>{
  res.end(`<h1> hola <br> node a <mark>id:${req.query.s}</mark></h1>`)
})

// res.redirect( status , url )
app.get('/jimmy' , (req,res)=>{
  res.redirect(301,'https://github.com/JgeovanniAm/NodeJS')
})

app.get('/json' , (req , res) =>{
  res.json({
    name:"jimmy",
    edad:"20 años"
  })
  //console.log(req.method)
})

app.listen(5000);
console.log('corriendo en el puerto 5000')