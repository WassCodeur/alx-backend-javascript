const fs = require('fs');

function countStudents(path) {
  const FIELDS = {};
  return (new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const lines = data.split(/\r?\n/);
      let len = lines.length - 1;
      for (let i = 1; i < lines.length;) {
        if (lines[i].trim() !== '') {
            const [fname, lname, age, field] = lines[i].split(',') // eslint-disable-line
          if (!FIELDS[field]) {
            FIELDS[field] = {
              count: 1,
              students: [fname],
            };
          } else {
            const nwCount = FIELDS[field].count + 1;
            const nwStudents = FIELDS[field].students.concat(fname);
            FIELDS[field] = {
              count: nwCount,
              students: nwStudents,
            };
          }
        } else {
          len -= 1;
        }
        i += 1;
      }
      console.log(`Number of students: ${len}`);
      for (const field of Object.keys(FIELDS)) {
        const { count } = FIELDS[field];
        const { students } = FIELDS[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  }));
}

module.exports = countStudents;
