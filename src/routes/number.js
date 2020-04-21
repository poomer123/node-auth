const router = require('express').Router()

const allowRoles = ['SUPER_ADMIN', 'ADMIN', 'CUSTOMER']

router.get('/', (req, res) => {
	if (!allowRoles.includes(res.locals.role)) {
		res.status(403).end()
	}
	console.log(res.locals.userDetail)
	res.cookie('hello', 'HELLO')
	res.cookie('world', 'WORLD', { httpOnly: true })
	res.json({})
})

module.exports = router
