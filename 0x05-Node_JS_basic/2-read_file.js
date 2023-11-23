const fs = require('fs');

function countStudents(path) {
  try {
    const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);
    let totalStudents = 0;
    const fields = {};
    for (let i = 1; i < lines.length;) {
      if (lines[i].trim() !== '') {
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
      }
      i += 1;
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field of Object.keys(fields)) {
      const numberOfStudent = fields[field].count;
      const names = fields[field].students;
      console.log(`Number of students in ${field} ${numberOfStudent}. List: ${names}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
