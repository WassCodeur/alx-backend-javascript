const http = require('http');
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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${totalStudents}\n`);
    for (const field of Object.keys(fields)) {
      const numberOfStudents = fields[field].count;
      const names = fields[field].students;
      res.write(`Number of students in ${field} is ${numberOfStudents}. List: ${names}\n`);
    }
  }
  res.end();
}).listen(1245);

module.exports = app;
