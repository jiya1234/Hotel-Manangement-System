var mongoose = require('mongoose');

//Create Authentication Schema using mongoose
var Schema = mongoose.Schema;
var authenticationSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String },
    type: { type: String }
}, { collection: 'authentication' });
var Authentication =module.exports= mongoose.model('Authentication', authenticationSchema);