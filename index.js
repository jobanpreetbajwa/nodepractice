const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const user = require('./routes/userRoutes')

const uri = process.env.MONGODB_URL

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', user)

app.listen(6000, () => {
  console.log('server started')
})
