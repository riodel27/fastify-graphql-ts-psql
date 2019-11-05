// const { Client } = require('pg')

// const client = new Client({
// 	user: 'postgres',
// 	host: '127.0.0.1',
// 	database: 'actis',
// 	password: 'root',
// 	port: '5432'
// })

// client.connect()

const getUsers = (request, response) => {
	// client.query("SELECT * FROM users", (error, results) => {
	// 	if (error) {
	// 		throw error
	// 	}
	// 	response.status(200).send([])
	// })
	response.status(200).send([])
}

module.exports = { getUsers }