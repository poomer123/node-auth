const allowCors = ['http://localhost:8080', 'http://localhost:8081']

module.exports = function cors(req, res, next) {
	const { origin } = req.headers
	if (origin && allowCors.includes(origin)) {
		res.set({
			'Access-Control-Allow-Origin': origin,
		})
	}

	next()
}
