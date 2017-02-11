var path = require('path');

module.exports = function (app) {
  return [
    // Simple static resources route ("/static/favicon.ico")
    {
      method: 'GET', path: '/favicon.ico',
      handler: {
        file: { path: __dirname + '/../assets/favicon.ico' }
      }
    },
    // Index / Front route:
    // GET calls indexController.indexAction()
    {
      method: 'GET', path: '/',
      handler: app.execute.bind(app, 'index', 'index')
    }
  ];
};