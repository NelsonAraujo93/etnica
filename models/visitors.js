'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VisitorsSchema = Schema({
    number: Number
});

module.exports = mongoose.model('Visitors',VisitorsSchema);