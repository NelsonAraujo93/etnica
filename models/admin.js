'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = Schema({
    userName: { type: String, unique: true },
    email: String,
    pass: String,

});

module.exports = mongoose.model('AdminUser', AdminSchema);