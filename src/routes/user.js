const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')

router.post('/add', async (req, res) => {
	const u = req.body
	const user = new User(u)
	user.type = 'user'
	const err = user.validateSync()
	if (err) {
		res.status(500)
		res.json(err.errors)
		return
	}

	const salt = bcrypt.genSaltSync(12)
	const hashPassword = bcrypt.hashSync(user.password, salt)
	user.password = hashPassword

	await user.save()

	res.json({ user })
})

module.exports = router
