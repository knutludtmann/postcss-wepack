const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    precss = require('precss'),
    autoprefixer = require('autoprefixer')


gulp.task('css', function() {


    return gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});