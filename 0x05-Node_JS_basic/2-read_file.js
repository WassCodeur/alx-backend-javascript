const fs = require('fs');

function countStudents(path) {
  try {
    let csNb = 0;
    let sweNb = 0;
    const stdsCs = [];
    const stdsSwe = [];
    let itemArr = [];
    const data = fs.readFileSync(path, 'utf-8');
    const dataArr = data.split('\n');
    dataArr.pop();
    const len = dataArr.length;
    for (let i = 1; i < len;) {
      itemArr = dataArr[i].split(',');
      if (itemArr[3] === 'CS') {
        csNb += 1;
        stdsCs.push(itemArr[0]);
      } else if (itemArr[3] === 'SWE') {
        sweNb += 1;
        stdsSwe.push(itemArr[0]);
      }
      i += 1;
    }
    process.stdout.write(`Number of students: ${len - 1}\n`);
    if (csNb >= sweNb) {
      process.stdout.write(`Number of students in CS: ${csNb}. List: ${stdsCs.join(', ')}\n`);
      process.stdout.write(`Number of students in SWE: ${sweNb}. List: ${stdsSwe.join(', ')}`);
    } else {
      process.stdout.write(`Number of students in SWE: ${sweNb}. List: ${stdsSwe.join(', ')}`);
      process.stdout.write(`Number of students in CS: ${csNb}. List: ${stdsCs.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
