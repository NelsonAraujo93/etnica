'use strict'

const path = require ('path');
const fs = require('fs');
var validator = require('validator');
var PodcastModel = require('../models/podcast');
var VideoModel = require('../models/videos');
var ArticuloModel = require('../models/articulos');
var VisitorsModel = require('../models/visitors');

//const configMensaje = require('../controllers/configMensajes');

var controller = {

    /**
     * Funcion name:  saveAdmin
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    saveVideo: (req, res) => {
        var params = req.body;
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_name = !validator.isEmpty(params.name);
            var validate_duration = !validator.isEmpty(params.duration);
            var validate_image = !validator.isEmpty(params.image);
            var validate_date = !validator.isEmpty(params.date);
            var validate_url = !validator.isEmpty(params.url);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + err
            });
        }

        if (validate_title && validate_image && validate_duration  && validate_date && validate_url && validate_name) {
        //if (validate_title && validate_duration) {

            //crear objeto
            var video = new VideoModel();

            video.title = params.title;
            video.image = params.image;
            video.duration = params.duration;
            video.date = params.date;
            video.url = params.url;
            video.name = params.name;


            //guardar en base de datos con save

            video.save((err, videoStored) => {

                if (err || !videoStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'el video no se ha guardado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'OK',
                        data: video
                    });
                }
            });
        } else {

            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + 'sec'
            });
        }

    },
    
    /**
     * Funcion name:  saveVisitors
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    saveVisitors: (req, res) => {
        var params = req.body;
        try {
            var validate_number = !validator.isEmpty(params.number);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + err
            });
        }

        if (validate_number) {
            var visitors = new VisitorsModel();
            visitors.number = params.number;
            visitors.save((err, visitorsStored) => {
                if (err || !visitorsStored) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'el visitors no se ha guardado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'OK',
                        data: visitors
                    });
                }
            });
        } else {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + 'sec'
            });
        }

    },
     /**
     * Funcion name:  updateVisitors
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    updateVisitors: (req, res) => {
        var id = req.params.id;
        var params= req.body;
        try {
            var validate_number = !validator.isEmpty(params.number.toString());
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + err
            });
        }

        if (validate_number) {
        //if (validate_number && validate_duration) {

            //crear objeto
            VisitorsModel.findOneAndUpdate({_id:id},params,{new:true}, (err, visitorsUpdated) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'el articulo no se ha actualizado'
                    });
                }
                if(!visitorsUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'el articulo no existe'
                    });
                }
                return res.status(200).send({
                    status: 'OK',
                    message: 'el articulo se ha actualizado',
                    data: visitorsUpdated
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + 'sec'
            });
        }

    },
     /**
     * Funcion name:  getVisitors
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    getVisitors: (req, res) => {
        var id = req.params.id;
            //crear objeto
        VisitorsModel.findById(id).exec((err,visitors)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    mesage: 'Al devolver visitors'
                });
            }
            if(!visitors){
                return res.status(404).send({
                    status: 'error',
                    mesage: 'No hay visitors para mostrar'
                });
            }
            return res.status(200).send({
                status: 'Ok',
                data: visitors
            });
        });
           
    },


    /**
     * Funcion name:  saveArticulo
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    saveArticulo: (req, res) => {
        var params = req.body;
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_name = !validator.isEmpty(params.name);
            var validate_image = !validator.isEmpty(params.image);
            var validate_date = !validator.isEmpty(params.date);
            var validate_url = !validator.isEmpty(params.url);
            var validate_categorie = !validator.isEmpty(params.categorie);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + err
            });
        }

        if (validate_title && validate_image  && validate_date && validate_url && validate_name) {
        //if (validate_title && validate_duration) {

            //crear objeto
            var articulo = new ArticuloModel();

            articulo.title = params.title;
            articulo.image = params.image;
            articulo.date = params.date;
            articulo.url = params.url;
            articulo.name = params.name;
            articulo.categorie = params.categorie;


            //guardar en base de datos con save

            articulo.save((err, articuloStored) => {

                if (err || !articuloStored) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'el articulo no se ha guardado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'OK',
                        data: articulo
                    });
                }
            });
        } else {

            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + 'sec'
            });
        }

    },

      /**
     * Funcion name:  updateArticulo
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    updateArticulo: (req, res) => {
        var id = req.params.id;
        var params= req.body;
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_name = !validator.isEmpty(params.name);
            var validate_image = !validator.isEmpty(params.image);
            var validate_date = !validator.isEmpty(params.date);
            var validate_url = !validator.isEmpty(params.url);
            var validate_categorie = !validator.isEmpty(params.categorie)
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + err
            });
        }

        if (validate_title && validate_image  && validate_date && validate_url && validate_name && validate_categorie) {
        //if (validate_title && validate_duration) {

            //crear objeto
            ArticuloModel.findOneAndUpdate({_id:id},params,{new:true}, (err, articleUpdated) =>{
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'el articulo no se ha actualizado'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'el articulo no existe'
                    });
                }
                return res.status(200).send({
                    status: 'OK',
                    message: 'el articulo se ha actualizado'
                });
            });
        } else {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos' + 'sec'
            });
        }

    },
/**
     * Funcion name:  deleteArticulo
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    deleteArticulo: (req, res) => {
        var id = req.params.id;
            //crear objeto
        ArticuloModel.findOneAndDelete({_id:id}, (err, articleDeleted) =>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'el articulo no se ha borrado'
                });
            }
            if(!articleDeleted){
                return res.status(404).send({
                    status: 'error',
                    message: 'el articulo no existe'
                });
            }
            return res.status(200).send({
                status: 'OK',
                message: 'el articulo se ha borrado'
            });
        });
    },

    /**
     * Funcion name:  savePodcast
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    savePodcast: (req, res) => {
        var params = req.body;

        try {
            var validate_title = !validator.isEmpty(params.user_name);
            var validate_duration = !validator.isEmpty(params.duration);
            var validate_image = !validator.isEmpty(params.image);
            var validate_date = !validator.isEmpty(params.date);

        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos'
            });
        }

        if (validate_title && validate_image && validate_duration && validate_date) {

            //crear objeto
            var podcast = new PodcastModel();

            podcast.title = params.user_name;
            podcast.image = params.image;
            podcast.duration = params.duration;
            podcast.date = params.date;


            //guardar en base de datos con save

            podcast.save((err, podcastStored) => {

                if (err || !podcastStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'el podcast no se ha guardado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'OK',
                        data: podcast
                    });
                }
            });
        } else {

            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos'
            });
        }

    },
 /**
     * Funcion name:  loadImages
     * Funcionalidad: carga el listado de transferencias
     * 
     */
    loadImages:  (req, res ) => {
        var params=req.params.image;
        let rename='';
        const splited = params.split('_');
        if(splited.length===1){
            const name = params.split('.')[0];
            let type = params.split('.')[1];
            if(type ==='jpg'){
                type='JPG';
            }
            var path_file= './uploads/images/' + name +'.'+ type;
            fs.exists(path_file, (exists)=>{
                if(exists){
                    return res.sendFile(path.resolve(path_file));
                }else{
                    return res.status(404).send({
                        status: 'error',
                        message: "there's no image related"
                    });
                }
            });
        }else{
            for(let i=0, len = splited.length; i<len;i++){
                rename = rename + splited[i].toLowerCase();
            }
            const name = rename.split('.')[0];
            let type = rename.split('.')[1];
            if(type=='jpg'){
                type='JPG';
            }
            var path_file= './uploads/images/' + name +'.'+ type;
            fs.exists(path_file, (exists)=>{
                if(exists){
                    return res.sendFile(path.resolve(path_file));
                }else{
                    return res.status(404).send({
                        status: 'error',
                        message: "there's no image related"
                    });
                }
            });
        }   
    },
    
    /**
     * Funcion name:  loadVideos
     * Funcionalidad: carga el listado de transferencias
     * 
     */
    loadVideos:  (req, res )=> {
        /*var params=req.params.video;
        var path_file= './uploads/videos/' + params;
        console.log(params);
        fs.exists(path_file, (exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: "there's no video related"
                });
            }
        });*/
        var url = req.params.video;
        var path_file = './uploads/videos/' + url;
        fs.exists(path_file, (exists)=>{
            if(exists){
                return new Promise(function(resolve, reject) {
                    try {
                        var filestream = fs.createReadStream(path_file);
                        res.contentType("video/mp4");
                        filestream.pipe(res);
                        //return request('http://localhost:4200').pipe(stream);
                    } catch (e) {
                        return reject(e);
                    }
                });
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: "there's no pdf related"
                });
            }
        });
    },
    downloadPDF : (req , res) =>{
        var params = req.body;
        console.log(params._id);
        var url = params.url;
        var path_file = './uploads/articles/' + url;
        var filePath = './uploads/articles/';
        fs.exists(path_file, (exists)=>{
            if(exists){
                return new Promise(function(resolve, reject) {
                    try {
                        var filestream = fs.createReadStream(path_file);
                        res.contentType("application/pdf");
                        filestream.pipe(res);
                        //return request('http://localhost:4200').pipe(stream);
                    } catch (e) {
                        return reject(e);
                    }
                });
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: "there's no pdf related"
                });
            }
        })
    },

    /**
     * Funcion name:  load All Videos
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    loadAllVideos: (req, res) => {
        VideoModel.find({}).exec((err,videos)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    mesage: 'Al devolver videos'
                });
            }
            if(!videos){
                return res.status(404).send({
                    status: 'error',
                    mesage: 'No hay videos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'Ok',
                data: videos
            });
        });
       
    },
    /**
     * Funcion name:  load All Articulos
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    loadAllArticulos: (req, res) => {
        ArticuloModel.find({}).exec((err, articulos)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    mesage: 'Al devolver articulos'
                });
            }
            if(!articulos){
                return res.status(404).send({
                    status: 'error',
                    mesage: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'Ok',
                data: articulos
            });
        });
       
    },
    /**
     * Funcion name:  downloadPDF
     * Funcionalidad: descarga un PDF desde la carpeta
     * 
     */
    downloadPDF : (req , res) =>{
        var params = req.body;
        console.log(params._id);
        var url = params.url;
        var path_file = './uploads/articles/' + url;
        var filePath = './uploads/articles/';
        fs.exists(path_file, (exists)=>{
            if(exists){
                return new Promise(function(resolve, reject) {
                    try {
                        var filestream = fs.createReadStream(path_file);
                        res.contentType("application/pdf");
                        filestream.pipe(res);
                        //return request('http://localhost:4200').pipe(stream);
                    } catch (e) {
                        return reject(e);
                    }
                });
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: "there's no pdf related"
                });
            }
        })
    },
/**
     * Funcion name:  getPdf
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    getPdf: (req, res) => {
        var params = req.params;
        var url = params.url;
        var path_file= 'uploads/articles/' + url;
        var filePath = './uploads/articles/';
        fs.exists(path_file, (exists)=>{
            if(exists){
                return new Promise(function(resolve, reject) {
                    try {
                        var filestream = fs.createReadStream(path_file);
                        res.contentType("application/pdf");
                        filestream.pipe(res);
                        //return request('http://localhost:4200').pipe(stream);
                    } catch (e) {
                        return reject(e);
                    }
                });
            }else{
                return res.status(404).send({
                    status: 'error',
                    message: "there's no pdf related"
                });
            }
        });
    },
    /*formularioCorreo: (req, res) => {
        configMensaje(req.body);
        console.log(res);
        return res.status(200).send({
            status: 'Ok',
            mesage: 'Mensaje enviado'
        });
    },*/


};
module.exports = controller;