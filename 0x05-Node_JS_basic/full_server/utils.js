import fs from 'fs';

export default function readDatabase(path) {
  const promiseA = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const studentsPerField = {};
        const lines = data.split(/\r?\n/);
        for (let i = 1; i < lines.length;) {
          if (lines[i].trim() !== '') {
            const [fname, lname, age, field] = lines[i].split(",") // eslint-disable-line
            if (!studentsPerField[field]) {
              studentsPerField[field] = [fname];
            } else {
              studentsPerField[field].push(fname);
            }
          }
          i += 1;
        }
        resolve(studentsPerField);
      }
    });
  });

  return promiseA;
}
