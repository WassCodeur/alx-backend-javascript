const fs = require('fs');

function readDatabase(path) {
  const stdsFields = {};
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (data) {
        const lines = data.trim().split(/\r?\n/);
        for (let i = 1; i < lines.length;) {
					const [fname, lname, age, field] = lines[i].split(',') // eslint-disable-line
          if (!stdsFields[field]) {
            stdsFields[field] = [fname];
          } else {
            const newStudent = stdsFields[field].concat(fname);
            stdsFields[field] = newStudent;
          }
          i += 1;
        }
        resolve(stdsFields);
      } else if (err) {
        reject(err);
      }
    });
  });
}

export default readDatabase;
