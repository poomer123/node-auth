const router = require('express').Router()
const cookieParser = require('cookie-parser')
const {
	signRefreshToken,
	signAccessToken,
	verifyRefreshToken,
} = require('../jwt')

router.post('/login', (req, res) => {
	const u = req.body
	const payload = {
		username: u.username,
		role: 'ADMIN',
	}
	const refreshToken = signRefreshToken(payload)
	// should write to the database
	const { accessToken, accessTokenExpiresAt } = signAccessToken(payload)
	res.cookie('refresh_token', refreshToken, {
		httpOnly: true,
		// domain: 'example.com',
	})
	res.json({ accessToken, accessTokenExpiresAt })
})

router.post('/auth/token', cookieParser(), (req, res) => {
	console.log('req.cookies', req.cookies)
	const refreshToken = req.cookies['refresh_token']
	const { isError, payload } = verifyRefreshToken(refreshToken)
	// should check from database
	if (isError) {
		res.status(401).end()
	}

	const { accessToken, accessTokenExpiresAt } = signAccessToken({
		username: payload.username,
	})
	res.json({ accessToken, accessTokenExpiresAt })
	res.end()
})

module.exports = router
