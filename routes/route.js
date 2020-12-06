'use strict'


var express = require('express');

var AdminController = require('../controllers/admin');


var router = express.Router();


//metodos get recibir
router.get('/login', AdminController.login);
router.get('/get-admin/:id', AdminController.getAdminInfo);

//metodos post enviar
router.post('/new-admin', AdminController.saveAdmin);
router.post('/login', AdminController.login);


//metodos put actualizar
//router.put('/login', AdminController.saveAdmin);

//metodos delete borrar
//router.delete('/login', AdminController.login);


module.exports = router;