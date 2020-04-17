const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/auth_workshop'

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

mongoose.connect(uri, options)

module.exports = mongoose
