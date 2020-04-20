module.exports = function preflight(req, res, next) {
	if (req.method === 'OPTIONS') {
		console.log(req.method)
		res.set({
			'Access-Control-Allow-Headers': 'content-type',
		})
		res.end()
		return
	}
	next()
}
