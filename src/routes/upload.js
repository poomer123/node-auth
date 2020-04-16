const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const uploader = multer({
	dest: path.resolve('temp'),
})

const middleware = uploader.single('xxx')

router.post('/', middleware, (req, res) => {
	console.log(req.file)

	const { filename, originalname } = req.file
	const extension = originalname.split('.')[1]
	const from = path.resolve('temp', filename)
	const to = path.resolve('storage', `${filename}.${extension}`)
	fs.renameSync(from, to)

	const buffer = fs.readFileSync(to)
	const base64 = buffer.toString('base64')

	res.write(`
        <img src="data:image/jpg;base64,${base64}" />
    `)
	res.end()
})

module.exports = router
