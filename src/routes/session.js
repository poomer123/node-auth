const router = require('express').Router()
const expressSession = require('express-session')

const app = require('../express')

app.use(
	expressSession({
		name: 'xxx',
		secret: 'SECRET_KEY',
		resave: false,
		saveUninitialized: false,
	})
)

router.post('/login', (req, res) => {
	if (!req.session.isAuth) {
		req.session.isAuth = true
	}
	res.end()
})

router.get('/profile', (req, res) => {
	console.log(req.session.isAuth)
	res.json({})
})

router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		console.log('logout success')
	})
	// req.session = null
	res.json({})
})

module.exports = router
