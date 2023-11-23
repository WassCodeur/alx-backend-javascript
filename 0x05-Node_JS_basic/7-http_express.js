const express = require('express');

const app = express();
const fs = require('fs');

const fields = {};
let totalStudents = 0;
if (process.argv[2] === undefined) {
  console.log('USAGE: node 5-http.js filaname');
  process.exit(1);
}
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (data) {
    const lines = data.trim().split(/\r?\n/);
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

      totalStudents += 1;

      i += 1;
    }
  } else if (err) {
    throw new Error('Cannot load the database');
  }
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  let responseText = 'This is the list of our students\n';
  responseText += `Number of students: ${totalStudents}\n`;
  for (const field of Object.keys(fields)) {
    const numberOfStudents = fields[field].count;
    const names = fields[field].students;
    responseText += `Number of students in ${field} is ${numberOfStudents}. List: ${names}\n`;
  }
  res.send(responseText);
});

app.listen(1245);

module.exports = app;
