const { Client } = require('pg')

const client = new Client({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'mydb',
	password: 'root',
	port: '54320'
})

client.connect()

const getUsers = (request, response) => {
	client.query("SELECT * FROM users", (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).send(results.rows)
	})
}

module.exports = { getUsers }

