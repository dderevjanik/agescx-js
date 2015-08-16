var gulp = require('gulp'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('default', function () {
   return gulp.src('modules/scenario-reader/compiled/**/*.js')
      .pipe(concat('scenario-reader.js'))
      .pipe(gulp.dest('build/resources/js/'));
});