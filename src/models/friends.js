const mongoose = require('../mongoose')

const FriendSchema = new mongoose.Schema({
	name: String,
})

module.exports = {
	Friend: mongoose.model('friend', FriendSchema),
	FriendSchema: FriendSchema,
}
