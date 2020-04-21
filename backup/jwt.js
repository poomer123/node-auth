const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const privateKey = fs.readFileSync(path.resolve('src', 'private.key'))
const publicKey = fs.readFileSync(path.resolve('src', 'public.key'))

const ONE_MINUTE = 60

exports.signPayload = (payload) => {
	return jwt.sign(payload, privateKey, {
		expiresIn: ONE_MINUTE,
		algorithm: 'RS256',
	})
}

exports.verifySingnature = (token) => {
	try {
		const payload = jwt.verify(token, publicKey, {
			algorithm: ['RS256'],
		})
		return {
			err: false,
			payload,
		}
	} catch (error) {
		return {
			err: true,
			error,
		}
	}
}
