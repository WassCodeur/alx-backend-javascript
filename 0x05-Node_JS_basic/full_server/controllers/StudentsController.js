import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('./database.csv')
      .then((result) => {
        const messages = [];
        messages.push('This is the list of our students');
        let message = '';
        for (const key of Object.keys(result)) {
          message = (`Number of students in ${key}: ${result[key].length}. List: ${result[key].join(', ')}`);
          messages.push(message);
        }
        response.send(200, `${messages.join('\n')}`);
      }).catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase('./database.csv')
        .then((result) => {
          response.send(200, `List: ${result[major].join(', ')}`);
        }).catch(() => {
          response.send(500, 'Cannot load the database');
        });
    }
  }
}

export default StudentsController;
