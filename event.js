//todo copy this file to create an 'Event' model

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: false,
        min : 1,
        max : 255
    },
    lastName:{
        type: String,
        required: false,
        min : 1,
        max : 255
    },
    username:{
        type: String,
        required: true,
        min : 1,
        max : 255
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    location:{
        x:{
            type: Number,
            default: 0
        },
        y:{
            type: Number,
            default: 0
        }
    }
});

//Determines the collection it will be saved in users
module.exports = mongoose.model('User', userSchema);