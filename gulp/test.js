/* global require */

var mocha = require('gulp-mocha');

var npm = require('npm');
var nodeDebug = require('node-inspector/bin/node-debug');

exports.config = function(gulp) {
    gulp.task('test', function() {
        return runTests({ 
            reporter: 'spec', 
        });
    });
    
    gulp.task('test.tc', function() {
        return runTests({ 
            reporter: 'mocha-teamcity-reporter',
        });
    });
        
    gulp.task('test.debug', function() {
        var path = require('path');

        // First two args are not used, second two are passed into node-debug as the path to debug and an arg for the node application
        process.argv = ['node-debug', 'node-debug', path.join(__dirname, '/../node_modules/gulp/bin/gulp.js'), 'test'];
    
        nodeDebug();
    });
    
    function runTests(mochaSettings, done) {
        return getTests().pipe(mocha(mochaSettings));
    }
    
    function getTests() {
        return gulp.src('./tests/**/*.js', { read: false });
    }
};