const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    if (process.argv.length >= 3) {
      const path = process.argv[2];
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
        } else {
          const lines = data.split(/\r?\n/);
          const FIELDS = {};
          let nbOfStudents = lines.length - 1;
          for (let i = 1; i < lines.length;) {
            if (lines[i].trim() !== '') {
              const [fname, lname, age, field] = lines[i].split(','); // eslint-disable-line
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
              nbOfStudents -= 1;
            }
            i += 1;
          }

          res.write('This is the list of our students\n');
          res.write(`Number of students: ${nbOfStudents}\n`);
          for (const field of Object.keys(FIELDS)) {
            const { count } = FIELDS[field];
            const { students } = FIELDS[field];
            res.write(`Number of students in field: ${count}. List: ${students.join(', ')}\n`);
          }
          res.end();
        }
      });
    }
  }
});

app.listen(1245);

module.exports = app;
