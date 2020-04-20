new Vue({
	el: '#app',
	methods: {
		async handleGet() {
			const { data } = await axios.get('http://localhost:3000/number')
			console.log(data)
		},
		async handleLogin() {
			const { data } = await axios.post('http://localhost:3000/login', {
				username: 'admin',
				password: '123456',
			})
			console.log(data)
		},
	},
})
