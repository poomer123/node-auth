module.exports = function cors(req, res, next) {
	res.set({
		'Access-Control-Allow-Origin': 'http://localhost:8080',
	})
	next()
}
