const router = require('express').Router()

router.get('/', (req, res) => {
	console.log(res.locals.userDetail)
	res.cookie('hello', 'HELLO')
	res.cookie('world', 'WORLD', { httpOnly: true })
	res.json({})
})

module.exports = router
