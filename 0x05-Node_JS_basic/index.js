const fs = require('fs')

path = './database.csv'

// try {
    const data = fs.readFileSync(path, 'utf8')
    data_ = data.split('\n')
    data_.pop()
    console.log(data_.length)
// }catch (err) {
//     console.error(err)
// }
