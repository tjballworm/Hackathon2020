//todo copy this file to create an 'Event' model

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true,
        min:1,
        max:255
    },
    eventCreator:{
        type: String,
        required: false,
        min : 1,
        max : 255
    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    dateStart: {
        type: Date,
        default: Date.now,
        required: true
    },
    dateEnd: {
        type:Date,
        default:Date.now,
        required:true
    },
    locationSpec:{
        lat:{
            type: Number,
            default: 0
        },
        long:{
            type: Number,
            default: 0
        },
        locationName: {
            type:String,
            min:1,
            max:255,
            required:true
        }
    },
    phoneNumber:{
        type: Number,
        required: false,
    },
    typeOfGame:{
        type:String,
        required:true,
        min:1,
        max:255
    }
});

//Determines the collection it will be saved in users
module.exports = mongoose.model('Event', userSchema);