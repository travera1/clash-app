const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 
const morgan = require('morgan')
const path = require('path')

app.set('view engine', 'ejs')
//middleware and static files
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "static")));
//app.use(express.static("static"))
//app.use(express.urlencoded({ extended: true }))
//.use(morgan('tiny'))

//routes
app.get('/', (req, res) => {
    res.render('pages/index.ejs')
  })
  app.get('/login', (req, res) => {
    res.render('pages/login.ejs')
  })
  

app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT} ..`))