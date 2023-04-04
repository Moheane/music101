const mongoose = require('mongoose')
//const Joi = require('Joi')
const songSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, 'song title is required!']
    },
    content: {
        type: Buffer,
        required: [true, 'song title is required!']
    },
    category: {
        type: String,
        enum: ["house", "amapiano", "jazz", "hip-hop", "traditional"],
        required: [true, 'song title is required!']
    }
})

const song = mongoose.model('song', songSchema)

function songValidator(payLoad) {
    
}

module.exports = song