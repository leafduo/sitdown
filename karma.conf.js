// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/codemirror/lib/codemirror.js',
      'app/bower_components/codemirror/addon/mode/overlay.js',
      'app/bower_components/codemirror/mode/markdown/markdown.js',
      'app/bower_components/codemirror/mode/gfm/gfm.js',
      'app/bower_components/angular-ui-codemirror/ui-codemirror.js',
      'app/bower_components/marked/lib/marked.js',
      'app/bower_components/highlightjs/highlight.pack.js',
      'app/bower_components/angularLocalStorage/src/angularLocalStorage.js',
      'app/bower_components/dropstore-ng/dropstore-ng.js',
      'http://cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.10.1/dropbox.min.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    reporters: ['progress', 'osx'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
