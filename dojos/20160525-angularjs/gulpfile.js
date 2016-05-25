var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: 8080,
    livereload: true
  });
});

gulp.task('reload', function () {
  return gulp
    .src('./app/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
