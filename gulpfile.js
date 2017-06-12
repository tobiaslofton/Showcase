var gulp = require('gulp');

gulp.task('copy', function(){
  gulp.src('showcase.html').pipe(gulp.dest('assets'));
});
