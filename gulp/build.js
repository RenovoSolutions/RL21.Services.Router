var runSequence = require('run-sequence');

var del = require('del');
var merge = require('merge2');
var compile = require('./compile');

exports.config = function(gulp) {
    gulp.task('build', function(done) {
        runSequence('clean',
                    'tsc', 
                    'copy',
                    done);
    });
    
    gulp.task('clean', function(done) {
       return del('./release', done); 
    });

    gulp.task('tsc', function() {
        var ts = compile.typescript(gulp.src(['./source/**/*.ts', './typings/**/*.d.ts']));
        
        return merge([
            ts.js.pipe(gulp.dest('./release')),
            ts.dts.pipe(gulp.dest('./release/typings')),
        ]);
    });

    gulp.task('copy', function() {
        return gulp.src(['./source/**/*.js', './source/**/*.json', './source/**/*.ts'])
            .pipe(gulp.dest('./release'));
    });  
};
