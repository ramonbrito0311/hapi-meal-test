var path = require('path');

module.exports = {
  hapikachu: {
    basePath: __dirname + '/../assets/',
    assets: {
      js: [
        '//cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js'
      ],
      css: [
        {
          type: 'less', path:  '/less/',
          file: 'style.less'
        }
      ]
    }
  }
};