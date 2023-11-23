const fs = require('fs');

function countStudents(path) {
  const fields = {};
  let totalOfStudents = 0;
  return new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (data) {
        const lines = data.trim().split(/\n\r?/);
        for (let i = 1; i < lines.length;) {
          const [fname, lname, age, field] = lines[i].split(','); // eslint-disable-line
          if (!fields[field]) {
            fields[field] = {
              count: 1,
              students: fname,
            };
          } else {
            const newCount = fields[field].count + 1;
            const newStudent = fields[field].students.concat(`, ${fname}`);

            fields[field] = {
              count: newCount,
              students: newStudent,
            };
          }
          i += 1;
          totalOfStudents += 1;
        }
        console.log(`Number of students: ${totalOfStudents}`);
        for (const field of Object.keys(fields)) {
          const numberOfStudents = fields[field].count;
          const fnames = fields[field].students;
          console.log(`Number of students in ${field}: ${numberOfStudents}. List:  ${fnames}`);
        }
        resolve(data);
      } else if (err) {
        throw new Error('Cannot load the database');
      }
    });
  });
}

module.exports = countStudents;
