var gulp = require('gulp'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    tsc = require('gulp-typescript');

var srcPath = 'modules/scenario-reader/';
var buildPath = 'modules/scenario-reader/build/';

gulp.task('concat', function () {
      return gulp.src(srcPath + 'build/js/*.js')
            .pipe(concat('scenario-reader.js'))
            .pipe(gulp.dest(srcPath + 'build/'));
});

/**
 * compile typescript to build/ with separated .js files
 */
gulp.task('tsc', function(){
      return gulp.src(srcPath + '*.ts')
            .pipe(tsc({
                  target: 'es5',
            }))
            .pipe(gulp.dest(srcPath + 'build/js/'));      
});

/**
 * makes js ready to distribution
 */
gulp.task('finalize', function(){
      return gulp.src(srcPath + 'build/')
            .pipe(uglify())
            .pipe(minify())
            .pipe(gulp.dest(srcPath + 'build/'));   
});

/**
 * copy AgeScx module to test build/
 */
gulp.task('copy', function(){
   gulp.src(srcPath + 'build/scenario-reader.js')
      .pipe(gulp.dest('build/'))   
});

gulp.task('default', ['tsc', 'concat', 'copy']);
gulp.task('dist', ['tsc', 'concat', 'finalize']);
