/**
 * Main gulp file
 *
 * @author Simon Davies
 */
 var gulp       = require('gulp'),
   rename       = require('gulp-rename'),
   sass         = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   del          = require('del'),
   minifyCSS    = require('gulp-minify-css'),
   browserify    = require('browserify');

/**
 * CSS Tasks
 */
gulp.task('sass', function() {
    return gulp.src('resources/sass/app.scss')
        .pipe(sass({ style: 'compressed', sourcemap: true }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/css'));
});


/**
 * Clean some files before running the tasks
 */
gulp.task('clean', function(){
  del(['app/css/**/*']);
});

/**
 * Thw gulp watch file
 */
gulp.task('watch', function() {
  gulp.watch('resources/sass/partials/*.scss', ['sass']);
});
/**
 * Default config
 */
gulp.task('default', ['clean'], function(){
  gulp.start('sass', 'watch');
});
