const { Schema, model } = require("mongoose")

const DeckSchema = new Schema({
    name: {
        type: String,
        required: true,  
    },
    deckCards: {
        type: Array,
        required: true, 
        default: [{},{},{},{},{},{},{},{}]
    },
    user_id: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now,
    }
})

const Deck = model('deck', DeckSchema)

module.exports = Deck

