var gulp = require('gulp');
var build = require('./gulp/build.js');
var serve = require('./gulp/serve.js');
var test = require('./gulp/test.js');

build.config(gulp);
serve.config(gulp);
test.config(gulp);

gulp.task('default', ['build']);