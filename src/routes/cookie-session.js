const router = require('express').Router()
const cookieSession = require('cookie-session')

const app = require('../express')

const ONE_MINUTE = 1000 * 60

app.use(
	cookieSession({
		name: 'xxx',
		maxAge: ONE_MINUTE,
		secret: 'SECRET_KEY',
	})
)

router.post('/login', (req, res) => {
	if (!req.session.isAuth) {
		req.session.isAuth = true
		if (req.body.remember) {
			req.sessionOptions.maxAge = ONE_MINUTE * 60
		}
	}

	res.json({})
})

router.get('/profile', (req, res) => {
	console.log(req.session.isAuth)
	res.end()
})

router.get('/logout', (req, res) => {
	req.session = null
	res.end()
})

module.exports = router
