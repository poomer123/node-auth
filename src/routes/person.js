const router = require('express').Router()
const Person = require('../models/person')

router.get('/', async (req, res) => {
	const persons = await Person.find()
	res.json(persons)
})

router.post('/add', async (req, res) => {
	const person = new Person({
		name: req.body.name,
		age: req.body.age,
		phones: req.body.phones,
		friends: req.body.friends,
	})
	await person.save()
	res.end()
})

module.exports = router
