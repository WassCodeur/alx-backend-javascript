const fs = require('fs');

function countStudents(path) {
  try {
    const FIELDS = {};
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split(/\r?\n/);
    let len = lines.length - 1;
    for (let i = 1; i < lines.length;) {
      if (lines[i].trim() !== '') {
        const [fname, lname, age, field] = lines[i].split(','); // eslint-disable-line
        if (!FIELDS[field]) {
          FIELDS[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const newCount = FIELDS[field].count + 1;
          const newStudents = FIELDS[field].students.concat(fname);
          FIELDS[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      } else {
        len -= 1;
      }
      i += 1;
    }
    process.stdout.write(`Number of students: ${len}\n`);
    for (const field of Object.keys(FIELDS)) {
      const { students } = FIELDS[field];
      const { count } = FIELDS[field];
      process.stdout.write(`Number of students in ${field} ${count}. LIST: ${students.join(', ')}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
