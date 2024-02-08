import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function routes(router) {
  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
  });

  router.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
  });
}
export default routes;
