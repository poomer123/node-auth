const mongoose = require('../mongoose')

const FriendSchema = mongoose.Schema({
	name: String,
})

const options = {
	collection: 'person_custom',
}
const PersonSchema = new mongoose.Schema(
	{
		name: String,
		age: Number,
		phones: [String],
		friends: [FriendSchema],
	},
	options
)

module.exports = mongoose.model('person', PersonSchema)
