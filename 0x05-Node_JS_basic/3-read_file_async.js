const fs = require('fs');

function countStudents(path) {
  let csNb = 0;
  let sweNb = 0;
  const sweArr = [];
  const csArr = [];
  let stdsArr = [];
  return (new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
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
      process.stdout.write(`Number of students: ${len - 1}\n`);
      if (csNb >= sweNb) {
        process.stdout.write(`Number of students in CS: ${csNb}. List: ${csArr.join(', ')}\n`);
        process.stdout.write(`Number of students in CS: ${sweNb}. List: ${sweArr.join(', ')}\n`);
      } else {
        process.stdout.write(`Number of students in SWE: ${sweNb}. List: ${sweArr.join(', ')}`);
        process.stdout.write(`Number of students in CS: ${csNb}. List: ${csArr.join(', ')}`);
      }
      resolve();
    });
  }));
}

module.exports = countStudents;
