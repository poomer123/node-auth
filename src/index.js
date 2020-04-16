const express = require('express')
const app = require('./express')
const path = require('path')

app.use(express.static(path.resolve('public')))

app.use('/upload', require('./routes/upload'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/customers', require('./routes/customers'))
app.use('/form', require('./routes/form'))

app.listen(3000)
