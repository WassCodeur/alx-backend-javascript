import readDatabase from '../utils';

const MAJORS = ['CS', 'SWE'];
const dataPath = process.argv.length > 2 ? process.argv[2] : '';
export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dataPath)
      .then((value) => {
        const responseData = ['This is the list of our students'];
        for (const field of Object.keys(value)) {
          const students = value[field];
          responseData.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        response.status(200).send(responseData.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (MAJORS.includes(major)) {
      readDatabase(dataPath)
        .then((value) => {
          let studentsList = '';
          if (Object.keys(value).includes(major)) {
            const students = value[major];
            studentsList = `List: ${students.join(', ')}`;
          }
          response.status(200).send(studentsList);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
