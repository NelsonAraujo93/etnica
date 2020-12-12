'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = Schema({
    title: String,
    name: String,
    date: String,
    image: String,
    url: String,
    categorie: String
});

module.exports = mongoose.model('Article',ArticleSchema);