const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 

app.use(express.static("static"))
app.get('/', (req, res) => {
    res.send('Hello Program')
})

app.listen(PORT, () => console.log(`App listening at http:localhost:${PORT} ..`))