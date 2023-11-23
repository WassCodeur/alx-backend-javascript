const fs = require('fs')

function readDatabase(path) {
	return new Promise((reject, resolve) => {
		fs.readFile(path, (err, data) => {
			if(data) {
				resolve(data)
			} else {
				reject(err)
			}
		})

	})
