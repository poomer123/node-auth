const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const privateKey = fs.readFileSync(path.resolve('src', 'private.key'))
const publicKey = fs.readFileSync(path.resolve('src', 'public.key'))

exports.signRefreshToken = (payload) => {
	return jwt.sign(payload, privateKey, {
		algorithm: 'RS256',
		expiresIn: '1h',
		subject: 'refresh_token',
	})
}

exports.signAccessToken = (payload) => {
	const ONE_MINUE = 1000 * 60
	const ONE_SECOUND = 1000
	return {
		accessToken: jwt.sign(payload, privateKey, {
			algorithm: 'RS256',
			expiresIn: '1m',
			subject: 'access_token',
		}),
		accessTokenExpiresAt: new Date(
			Date.now() + ONE_MINUE * 1 - ONE_SECOUND * 10
		),
	}
}

exports.verifyRefreshToken = (token) => {
	try {
		const payload = jwt.verify(token, publicKey, {
			subject: 'refresh_token',
		})
		return {
			isError: false,
			payload,
		}
	} catch (error) {
		return {
			isError: true,
			error,
		}
	}
}

exports.verifyaccessToken = (token) => {
	try {
		const payload = jwt.verify(token, publicKey, {
			subject: 'access_token',
		})
		return {
			isError: false,
			payload,
		}
	} catch (error) {
		return {
			isError: true,
			error,
		}
	}
}
