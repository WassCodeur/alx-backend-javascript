const express = require('express');
const fs = require('fs');

const app = express();

app.listen(1245);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (process.argv.length >= 3) {
    const path = process.argv[2];
    let csNb = 0;
    let sweNb = 0;
    let stdsArr = [];
    const sweArr = [];
    const csArr = [];
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
        const msg1 = (`This is the list of our students\nNumber of students: ${len - 1}\n`);
        if (csNb >= sweNb) {
          const msg2 = (`Number of students in CS: ${csNb}. List: ${csArr.join(', ')}\nNumber of students in CS: ${sweNb}. List: ${sweArr.join(', ')}`);
          res.send(msg1 + msg2);
        } else {
          const msg2 = (`Number of students in CS: ${sweNb}. List: ${sweArr.join(', ')}\nNumber of students in CS: ${csNb}. List: ${csArr.join(', ')}`);
          res.send(msg1 + msg2);
        }
      }
    });
  }
});

module.exports = app;
