var runSequence = require('run-sequence');

var del = require('del');

var ts = require('gulp-typescript');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

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
        var tsFiles = gulp.src(['./source/**/*.ts', './typings/**/*.d.ts']);
        var compiler = ts({
            declarationFiles: true,
            noExternalResolve: true,
            module: 'commonjs',
            target: 'ES5',
            sortOutput: true,
        });
        var tsResult = tsFiles.pipe(sourcemaps.init({ debug: true }))
                              .pipe(compiler);

        return merge([
            tsResult.js.pipe(sourcemaps.write())
                       .pipe(gulp.dest('./release')),
            
            tsResult.dts.pipe(gulp.dest('./release/typings')),
        ]);
    });

    gulp.task('copy', function() {
        return gulp.src(['./source/**/*.js', './source/**/*.json', './source/**/*.ts'])
            .pipe(gulp.dest('./release'));
    });  
};
