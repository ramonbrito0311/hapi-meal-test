var path = require('path')
  , _ = require('lodash');

module.exports = {
  app: {
    name: 'myApp',
    protocol: 'http://',
    host: '0.0.0.0',
    port: process.env.PORT || 3001,
    path: __dirname + '/../',
    start: require('./init'),
    routes: require('./routes')
  },
  plugins: require('./plugins'),
  views: {
    engines: {
      html: {
        module: //'lodash',
        {
          compile: function (tmpl, options) {
            return _.template(tmpl, null, options || null);
          }
        }
      }
    },
    path: __dirname + '/../views',
    layout: true,
    layoutKeyword: 'body'
  },
  cache: {
    engine: 'catbox-memory'
  },
  debug: { request: ['error', 'uncaught'] }
};