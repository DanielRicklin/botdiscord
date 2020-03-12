const mongoose = require('mongoose')

const RapportSchema = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: [true, 'Me faut au moins une image']
    },
    name: {
        type: String,
        trim: true,
        required: [true, 'Me faut un nom stp']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Rapport', RapportSchema)