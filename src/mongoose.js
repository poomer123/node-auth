const mongoose = require('mongoose');
const config = require('./config/index');
const uri = config.DATABASE;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose.connect(uri, options);

module.exports = mongoose;
