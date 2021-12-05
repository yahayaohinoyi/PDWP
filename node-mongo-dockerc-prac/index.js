const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

mongoose.connect('mongodb://mac:password@database:27017/?authSource=admin').then(() => {
    console.log("successfully connected to db")
}).catch((e) => console.log(e))

app.get('/', (req, res) => {
  res.send('Hello Worldddieeerrrrrr!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  