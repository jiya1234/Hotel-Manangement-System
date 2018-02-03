const mongoose = require('mongoose');
const config = require('../config/database');

const AdminSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        PEC_ID:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        cnic:{
            type: String,
            required: true
        }
    });

    const Contact = module.exports = mongoose.model('Admin',AdminSchema);
