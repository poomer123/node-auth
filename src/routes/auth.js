const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const { signPayload } = require('../jwt')

router.post('/login', async (req, res) => {
	const u = req.body
	if (!u.username || !u.password) {
		res.status(500)
		res.end()
		return
	}

	const user = await User.findOne({
		username: u.username,
	})

	if (!user) {
		res.status(401)
		res.end()
		return
	}

	if (!bcrypt.compareSync(u.password, user.password)) {
		res.status(401)
		res.end()
		return
	}

	const token = signPayload({
		username: user.username,
		role: 'admin',
	})

	res.json({ token })
})

module.exports = router
