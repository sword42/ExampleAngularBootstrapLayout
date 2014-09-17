var sharedConfig = require('./karma-shared.conf.js');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
     'app/scripts/lib/angular/1.2.24/angular-mocks.js',


    //test files
    './test/unit/**/*.js'
  ]);

  config.set(conf);
};