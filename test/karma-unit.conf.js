var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
     


    //test files
    './test/unit/**/*.js'
  ]);

  config.set(conf);
};