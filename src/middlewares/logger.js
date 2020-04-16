module.exports = function logger(req, res, next) {
	console.log('logger')
	next()
}
