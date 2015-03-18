var spawn = require('child_process').spawn;

exports.config = function(gulp) {
    gulp.task('serve', function() {
       return spawn('node', ['./release/run.js'], { stdio: 'inherit' });
    });
};