const router = require('express').Router()

router.get('/', (req, res) => {
	console.log(res.locals.userDetail)
	res.json({})
})

module.exports = router
