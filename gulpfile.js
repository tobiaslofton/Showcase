// Gulp is a task runner that uses plug ins to accomplish diff tasks
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
    concat = require('gulp-concat');
var connect = require('gulp-connect');

// Tasks are functions that carry out methods that can then be called on the command line

//The copy task takes the html file and puts it into the assets folder : copy
gulp.task('copy', function(){
  gulp.src('showcase.html').pipe(gulp.dest('assets'));
});

//The log task functions to return an error should there be one : log
gulp.task('log', function(){
  gutil.log('My Log Task');
});

//The sass takes our scss file 'pipes' it into regular css. If there is an error it sends the error to the command line otherwise it will put the resulting css file into the assets folder : sass
gulp.task('sass', function(){
  gulp.src('scss/showcase.scss').pipe(sass({style: 'expanded'})).on('error', gutil.log).pipe(gulp.dest('assets'));
});

//The js task takes out javascript and makes it not readable to humans but faster for computers : js
gulp.task('js', function(){
  gulp.src('js/showcase.js').pipe(uglify()).pipe(gulp.dest('assets'));
});


//The watch tasks automates the above tasks so one command will run them : watch
gulp.task('watch', function(){
  gulp.watch('showcase.html', ['copy']);
  gulp.watch('scss/showcase.scss', ['sass']);
  gulp.watch('js/showcase.js', ['js']);
});


//The connect task will reflect changes made to the code in the browser without manually having to reload the page
gulp.task('connect', function(){
  connect.server({
    root: '.',
    livereload: true
  });
});
