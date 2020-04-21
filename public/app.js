new Vue({
	el: '#app',
	methods: {
		async handleGet() {
			const accessTokenExpiresAt = localStorage.getItem(
				'access_token_expires_at'
			)

			if (Date.now() > new Date(accessTokenExpiresAt).getTime()) {
				const { data } = await axios.post(
					'http://localhost:3000/auth/token',
					{
						withCredentials: true,
					}
				)
				const { accessToken, accessTokenExpiresAt } = data

				localStorage.setItem('access_token', accessToken)
				localStorage.setItem(
					'access_token_expires_at',
					accessTokenExpiresAt
				)
				console.log('received token')
			}
			const accessToken = localStorage.getItem('access_token')
			const { data } = await axios.get('http://localhost:3000/number', {
				headers: {
					authorization: `bearer ${accessToken}`,
				},
			})
			console.log(data)
		},
		async handleLogin() {
			const { data } = await axios.post('http://localhost:3000/login', {
				username: 'admin',
				password: '123456',
			})
			const { accessToken, accessTokenExpiresAt } = data
			localStorage.setItem('access_token', accessToken)
			localStorage.setItem(
				'access_token_expires_at',
				accessTokenExpiresAt
			)
			console.log(data)
		},
	},
})
