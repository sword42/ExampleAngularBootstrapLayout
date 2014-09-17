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
            'karma-firefox-launcher',
            'karma-jasmine'       
            ],
			
    files : [
      //3rd Party Code
      'app/scripts/lib/dev/jquery-2.0.3.js',
      'app/scripts/lib/dev/underscore-1.5.2.js',
      'app/scripts/lib/angular/1.2.24/angular.js',
      'app/scripts/lib/dev/angular-ui-router-0.2.11.js',
      'app/scripts/lib/localStorageModule.js',
      'app/scripts/lib/modernizr.custom.74608.js',

      //App-specific Code
      'app/scripts/*.js',

      //Test-Specific Code
    ]
  }
};