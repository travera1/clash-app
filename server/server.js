const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 
const morgan = require('morgan')
const path = require('path')


//middleware and static files
//app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, "static")));

//app.use(express.static("static"))

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/dist'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
    })
}


app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT} ..`))