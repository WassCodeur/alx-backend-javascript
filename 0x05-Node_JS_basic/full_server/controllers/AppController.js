class AppController {
  static getHomepage(request, response) { // eslint-disable-line no-unused-vars
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
