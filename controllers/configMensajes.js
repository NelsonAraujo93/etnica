'use strict'

const nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port:465,
        secure: true,
        auth: {
        user: 'EstudioVagos@gmail.com', // Cambialo por tu email
        pass: 'Vagos999Estudios' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: formulario.nombre + '<' + formulario.email+'>',
        to: 'EstudioVagos@gmail.com', // Cambia esta parte por el destinatario
        subject: formulario.asunto,
        html: '<strong>Nombre:</strong> '+ formulario.nombre +'<br/>'+
        '<strong>E-mail:</strong> '+ formulario.email +' <br/>'+
        '<strong>Mensaje:</strong> '+ formulario.mensaje,
    };
    const mailOptionsHello = {
        from: 'Vagos studios' + '<estudiovagos@gmail.com>',
        to: formulario.email, // Cambia esta parte por el destinatario
        subject: 'Bienvenid@ a Vagos studios',
        html: 'Gracias por comunicarte con nosotros <strong>'+ formulario.nombre +'</strong>. Revisaremos tu mensaje y nos contactaremos contigo lo más pronto posible.<br><br><br><br>'+
        'Atentamente: <strong>Vagos studios Staff </strong>'
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if (err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
    transporter.sendMail(mailOptionsHello, function (err, info) {
        if (err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
};