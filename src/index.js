const express = require('express')
const app = require('./express')
const path = require('path')

app.use('/upload', require('./routes/upload'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./mongoose')

app.use(require('./middlewares/cors'), require('./middlewares/prefilght'))

app.use(express.static(path.resolve('public')))
app.use('/', require('./routes/auth'))
// app.use('/number', require('./middlewares/jwt'), require('./routes/number'))
app.use('/number', require('./routes/number'))
app.use('/user', require('./routes/user'))
// app.use('/persons', require('./routes/person'))
// app.use('/session', require('./routes/session'))
// app.use('/cookie', require('./routes/cookie'))
// app.use('/cookie-session', require('./routes/cookie-session'))
// app.use('/customers', require('./routes/customers'))
// app.use('/form', require('./routes/form'))

app.listen(3000)
