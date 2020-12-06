'use strict';

//cargar modulos de node
const express = require('express');
const bodyParser = require('body-parser');
//const cookieparser= require ('cookie-parser');

const app = express();

//ejecutar express

//cargar las rutas
const adminRoutes = require('./routes/route');


//middlewares algo que se ejecuta antes de las rutas o las url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cookieparser());
//CORS para permitir peticiones desde el front

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//prefijos a las rutas


app.use('/', express.static('etnicaApp',{redirect:false}));
app.use('/etnica', adminRoutes);

app.get('*', function(req,res,next){
    res.sendFile(path.resolve('etnicaApp/index.html'));
});


module.exports = app;
