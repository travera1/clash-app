const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
//const userRoutes = require('./routes/api/users')

//middleware and static files
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, "static")));
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database connected ...'))
    .catch((err) => console.log(err))

//app.use('/api/users', userRoutes)

//app.use(express.static("static"))

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}


app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT} ..`))