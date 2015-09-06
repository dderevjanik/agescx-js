var gulp = require('gulp'),
      minify = require('gulp-minify'),
      uglify = require('gulp-uglify'),
      tsc = require('gulp-typescript');

var srcPath = 'modules/scenario-reader/',
      buildPath = 'webapp/build/js/';

gulp.task('tsc', function(){
      var tsResult = gulp.src(srcPath + '**/*.ts')
            .pipe(tsc({
                  noImplicitAny: true,
                  out: 'scenario-reader.js',
                  target: 'es5'
                  }));
      return tsResult.js.pipe(gulp.dest(buildPath));
});

gulp.task('finalize', function(){
      gulp.src(buildPath + 'scenario-reader.js')
            .pipe(uglify())
            .pipe(minify())
            .pipe(gulp.dest(buildPath));   
});

gulp.task('copy', function(){
   gulp.src(srcPath + 'webapp/build/scenario-reader.js')
      .pipe(gulp.dest('webapp/build/'))   
});

gulp.task('default', ['tsc', 'copy']);
gulp.task('dist', ['tsc', 'finalize']);
