const { verifyaccessToken } = require('../jwt')

module.exports = function jwt(req, res, next) {
	if (!req.headers['authorization']) {
		res.status(401).end()
		return
	}

	const token = req.headers['authorization'].replace(/bearer /i, '')
	const { err, payload } = verifyaccessToken(token)
	if (err) {
		res.status(403).end()
		return
	}

	res.locals.userDetail = payload
	res.locals.role = 'ADMIN'
	next()
}
