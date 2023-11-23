const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Parse CSV data using csv-parser
    const students = [];
    data
      .trim() // Remove leading/trailing whitespaces, including empty lines at the end
      .split('\n')
      .forEach((line) => {
        const [firstName, lastName, age, field] = line.split(',');
        if (firstName && lastName && age && field) {
          students.push({ firstName, lastName, age, field });
        }
      });

    // Count the number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    const fields = new Set(students.map((student) => student.field));
    fields.forEach((field) => {
      const studentsInField = students.filter((student) => student.field === field);
      const studentCount = studentsInField.length;
      const studentList = studentsInField.map((student) => student.firstName).join(', ');
      console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

// Example usage
const filePath = 'database.csv';
countStudents(filepath);

