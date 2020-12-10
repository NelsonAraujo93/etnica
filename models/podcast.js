'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PodcastSchema = Schema({
    title: String,
    duration: String,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Podcast',PodcastSchema);