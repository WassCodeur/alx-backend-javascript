const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (process.argv.length === 3) {
      const path = process.argv[2];
      const csArr = [];
      const sweArr = [];
      let stdsArr = [];
      let csNb = 0;
      let sweNb = 0;
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
        } else {
          const dataArr = data.split('\n');
          dataArr.pop();
          const len = dataArr.length;
          for (let i = 1; i < len;) {
            stdsArr = dataArr[i].split(',');
            if (stdsArr[3] === 'CS') {
              csNb += 1;
              csArr.push(stdsArr[0]);
            } else if (stdsArr[3] === 'SWE') {
              sweNb += 1;
              sweArr.push(stdsArr[0]);
            }
            i += 1;
          }

          res.write('This is the list of our students\n');
          res.write(`Number of students: ${len - 1}\n`);
          if (csNb >= sweNb) {
            res.write(`Number of students in CS: ${csNb}. List: ${csArr.join(', ')}\n`);
            res.write(`Number of students in CS: ${sweNb}. List: ${sweArr.join(', ')}`);
            res.end();
          } else {
            res.write(`Number of students in CS: ${sweNb}. List: ${sweArr.join(', ')}\n`);
            res.write(`Number of students in CS: ${csNb}. List: ${csArr.join(', ')}`);
            res.end();
          }
        }
      });
    }
  }
});

app.listen(1245);

module.exports = app;
