const router = require('express').Router()
const { customers } = require('../json-server.db.json')

router.get('/', (req, res) => {
	res.json(customers)
})

router.get('/:id', (req, res) => {
	const { id } = req.params
	const customer = customers.find((cus) => {
		return cus.id == id
	})
	res.json(customer)
})

module.exports = router
