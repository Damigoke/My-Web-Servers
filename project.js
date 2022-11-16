const express = require('express')
const app = express()
const expresslayouts = require('express-ejs-layouts')

const indexRouter = require('./Routes/indecx')

app.set('views-engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

app.use('./', indexRouter)

app.listen(process.env.PORT || 3000)