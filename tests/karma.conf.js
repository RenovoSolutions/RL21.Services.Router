// Karma configuration
module.exports = function(config) {
	var scriptsPath = 'release/';
	var testsPath = 'tests/';
	
	config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',

		// list of files / patterns to load in the browser
		// Files are loaded in order, so items listed first are sometimes required by items below
        files: [
			scriptsPath + '**/*.js',
			testsPath + '**/*.js',
		],

        // frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],

        // enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

        // Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
        
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
        
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],
        
		// enable / disable colors in the output (reporters and logs)
		colors: true,
	});
};

//		// list of files to exclude
//		exclude: [
//			scriptsPath + '*.min.js',
//		],
//		
//		htmlReporter: {
//			'outputFile': 'testResults.html',
//		},
