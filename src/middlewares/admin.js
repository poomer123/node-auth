module.exports = (req, res, next) => {
	const allowRoles = ['SUPER_ADMIN', 'ADMIN']
	if (!allowRoles.includes(res.locals.role)) {
		res.status(403).end()
	}
	next()
}
