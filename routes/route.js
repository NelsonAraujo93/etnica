'use strict'


var express = require('express');

var EtnicaController = require('../controllers/etnicaHome');


var router = express.Router();


//metodos get recibir
/*router.get('/login', AdminController.login);
router.get('/get-admin/:id', AdminController.getAdminInfo);*/
router.get('/load-image/:image', EtnicaController.loadImages);
router.get('/load-video/:video', EtnicaController.loadVideos);
router.get('/load-videos', EtnicaController.loadAllVideos);
router.get('/load-articulos', EtnicaController.loadAllArticulos);
//metodos post enviar

router.post('/new-video', EtnicaController.saveVideo);
router.post('/new-articulo', EtnicaController.saveArticulo);
router.post('/download-pdf', EtnicaController.downloadPDF);


//metodos put actualizar
//router.put('/login', AdminController.saveAdmin);

//metodos delete borrar
//router.delete('/login', AdminController.login);


module.exports = router;