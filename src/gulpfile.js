const gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    less = require('gulp-less'),
    path = require('path'),
    cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./less/*.less', ['less']);
});

gulp.task('js', function () {
    return browserify('./js/App.js')
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('../dist/js/'))
        .on('error', function(err) {
            console.error('Error in compress task', err.toString());
        });
});

gulp.task('less', function () {
    return gulp.src('./less/app.less')
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('../dist/css/'))
});
