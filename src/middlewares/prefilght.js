module.exports = function preflight(req, res, next) {
	if (req.method === 'OPTIONS') {
		res.set({
			'Access-Control-Allow-Headers': 'content-type,authorization',
			'Access-Control-Allow-Methods': 'PUT,DELETE',
		})
		res.end()
		return
	}
	next()
}
