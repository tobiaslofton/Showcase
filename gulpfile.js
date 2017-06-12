var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('copy', function(){
  gulp.src('showcase.html').pipe(gulp.dest('assets'));
});

gulp.task('log', function(){
  gutil.log('My Log Task'); 
});
