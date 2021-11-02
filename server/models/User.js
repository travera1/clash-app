const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt')

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
    favorites: {
        type: Array,
        required: false
    },
    date: {
        type: Date, 
        default: Date.now,
    }
})

UserSchema.pre('save', async function (next) {
    
    try {
        const salt = await  bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        console.log('user about to be saved to db', this)
        next()
    } catch (error) {
        next(error)
    }
    
})
UserSchema.pre('findByIdAndUpdate', async function (next) {
    
    try {

        const salt = await  bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        console.log('user password about to be chagned', this)
        next()
    } catch (error) {
        next(error)
    }
    
})

const User = model('user', UserSchema)

module.exports = User

