var _ = require('lodash');

/**
 * Demo controller
 * @type {Function}
 */
var IndexController = module.exports = function IndexController (options) {
  this.options = options;
};

  _.extend(
  IndexController.prototype,
  {
    indexAction: function (request, reply, data) {
      data.title = 'myApp | beta';
      data.heading = 'Hapi Meal!';
      data.other = '(°>_<°)';
      request.assets.addJavascript('js/index.js');
      return reply.view(data.viewName, data);
    }
  }
);
