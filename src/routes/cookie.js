const router = require('express').Router()
const cookieParser = require('cookie-parser')
const app = require('../express')

app.use(cookieParser())

const ONE_MINUTE = 1000 * 60

router.get('/', (req, res) => {
	const options = {
		maxAge: ONE_MINUTE,
		httpOnly: true,
	}
	res.cookie('key', 'value', options)
	res.json({})
})

router.get('/read', (req, res) => {
	console.log(req.cookies)
	res.json({})
})

module.exports = router
