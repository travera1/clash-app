const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 
const morgan = require('morgan')
const path = require('path')


//middleware and static files
//app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, "static")));
app.use(express.static("static"))

//.use(morgan('tiny'))

//routes
app.get('/', (req, res) => {
    res.send('Hello Program')
  
}

app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT} ..`))