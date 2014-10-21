module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,

    // these are default values anyway
    singleRun: true,
    colors: true,
    
    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'       
            ],
			
    files : [
      //3rd Party Code
      'app/scripts/lib/jquery/2.1.1/jquery-2.1.1.min.js',
      'app/scripts/lib/underscore/1.6.0/underscore-min.js',
      'app/scripts/lib/moment/2.7.0/moment.js',
      'app/scripts/lib/bootstrap/3.2.0/bootstrap.min.js',
      'app/scripts/lib/angular/1.2.22/angular.js',
      'app/scripts/lib/angular-ui-router/0.2.10/angular-ui-router.js',
      'app/scripts/lib/angular-ui-bootstrap/0.11.0/ui-bootstrap-tpls-0.11.0.min.js',
      'app/scripts/lib/localStorageModule.js',
      'app/scripts/lib/angular-md5.js',
      'app/scripts/lib/ngBase64.js',
      'app/scripts/lib/ui-utils.min.js',
      'app/scripts/lib/angular-moment-0.7.0.min.js',
      'app/scripts/lib/spin-2.0.1.min.js',
      'app/scripts/lib/indiClick-0.0.1.js',
      'app/scripts/lib/smart-table/08252014/smart-table.debug.js',
      'app/scripts/lib/modernizr.custom.74608.js',

      //App-specific Code
      'app/scripts/config.js',
      'app/scripts/base/demo.base.module.js',
      'app/scripts/base/*.js',
      'app/scripts/scripts.js',

      //Test-Specific Code
      'app/scripts/lib/angular/1.2.22/angular-mocks.js',
    ]
  }
};