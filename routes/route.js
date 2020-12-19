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
router.get('/get-pdf/:url', EtnicaController.getPdf);
//metodos post enviar

router.post('/new-video', EtnicaController.saveVideo);
router.post('/new-articulo', EtnicaController.saveArticulo);

router.post('/new-visitor', EtnicaController.saveVisitors);
router.post('/download-pdf', EtnicaController.downloadPDF);


//metodos put actualizar
router.put('/update-article/:id', EtnicaController.updateArticulo);
router.put('/update-visitors/:id', EtnicaController.updateVisitors);

//metodos delete borrar
router.delete('/delete-article/:id', EtnicaController.deleteArticulo);
//router.delete('/login', AdminController.login);


module.exports = router;