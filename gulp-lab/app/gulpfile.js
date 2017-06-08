const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');
// TODO 6.3a - include browserSync

gulp.task('minify', function() {
  gulp.src('js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});
gulp.task('processCSS', function(){
  gulp.src('styles/main.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'));
});
gulp.task('processCSS-sm', function(){
  gulp.src('styles/main.css')
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(concat('main.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('build'));
});
gulp.task('default', ['minify','processCSS-sm']);
gulp.task('watch', function(){
  gulp.watch('styles/*.css', ['processCSS']);
});
// TODO 6.3b - run a local server
