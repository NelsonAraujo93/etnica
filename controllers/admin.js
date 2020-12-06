'use strict'

var validator = require('validator');
var adminModel = require('../models/admin');
//const configMensaje = require('../controllers/configMensajes');

var controller = {

    /**
     * Funcion name:  saveAdmin
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    saveAdmin: (req, res) => {
        var params = req.body;

        try {
            var validate_userName = !validator.isEmpty(params.user_name);
            var validate_email = !validator.isEmpty(params.email);
            var validate_pass = !validator.isEmpty(params.pass);

        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos'
            });
        }

        if (validate_userName && validate_pass && validate_email) {

            //crear objeto
            var admin = new adminModel();

            admin.userName = params.user_name;
            admin.pass = params.pass;
            admin.email = params.email;


            //guardar en base de datos con save

            admin.save((err, adminStored) => {

                if (err || !adminStored) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'el articulo no se ha guardado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'ok',
                        data: admin
                    });
                }
            })

        } else {

            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos'
            });
        }

    },

    /**
     * Funcion name:  login
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    login: (req, res) => {
        var params = req.body;
        var userRequest = params.userName;
        var pass = params.pass;
        try {
            var validate_userName = !validator.isEmpty(params.userName);
            var validate_pass = !validator.isEmpty(params.pass);

        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'datos imcompletos'
            });
        }

        if (validate_userName && validate_pass) {
            //verificar que exista
            adminModel.find({ 'userName': userRequest, 'pass': pass }).exec((err, user) => {
                if (err && !user || user.length == 0) {
                    return res.status(404).send({
                        status: 'error',
                        mesage: 'El usuario no ha sido encontrado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'Ok',
                        data: user
                    });
                }
            });
        } else {
            return res.status(404).send({
                status: 'error',
                mesage: 'Formulario mal digilenciado'
            });
        }
    },

    /**
     * Funcion name:  getAdmin
     * Funcionalidad: Guarda un admin en la base de datos
     * 
     */
    getAdminInfo: (req, res) => {
        var params = req.params;
        try {
            var validate_id = !validator.isEmpty(params.id);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                mesage: 'Datos imcompletos'
            });
        }

        if (validate_id) {
            //verificar que exista
            adminModel.findById(params.id, (err, user) => {
                if (err && !user) {
                    return res.status(404).send({
                        status: 'error',
                        mesage: 'El usuario no ha sido encontrado'
                    });
                } else {
                    return res.status(200).send({
                        status: 'Ok',
                        data: user
                    });
                }
            });
        } else {
            return res.status(404).send({
                status: 'error',
                mesage: 'Datos incompletos'
            });
        }
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