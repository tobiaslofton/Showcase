var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('copy', function(){
  gulp.src('showcase.html').pipe(gulp.dest('assets'));
});

gulp.task('log', function(){
  gutil.log('My Log Task');
});

gulp.task('sass', function(){
  gulp.src('scss/showcase.scss').pipe(sass({style: 'expanded'})).on('error', gutil.log).pipe(gulp.dest('assets'));
});
