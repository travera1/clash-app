const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true, 
        
    },
    lastName: {
        type: String,
        required: true, 
        
    },
    username: {
        type: String,
        required: true, 
        
    },
    password: {
        type: String,
        required: true, 
        
    },
    date: {
        type: Date, 
        default: Date.now,
    }
})

const User = model('user', UserSchema)

module.exports = User

