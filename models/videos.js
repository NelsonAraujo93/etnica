'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VideoSchema = Schema({
    title: String,
    duration: String,
    date: String,
    image: String,
    url:String,
    name:String
});

module.exports = mongoose.model('Video',VideoSchema);