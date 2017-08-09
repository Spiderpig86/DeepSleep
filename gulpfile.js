let gulp = require('gulp');
let sass = require('gulp-sass');
let minify = require('gulp-minify-css');
let $ = require('gulp-load-plugins')();

gulp.task('compile', function() {
    gulp.src('./src/styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe($.concat('app.css'))
        .pipe(gulp.dest('./src/styles/css/'));
});

gulp.task('default', ['compile'], function() {
    return gulp.src(['./src/styles/css/app.css'])
        .pipe(minify())
        .pipe($.size())
        .pipe($.concat('app.min.css'))
        .pipe(gulp.dest('./src/styles/dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styles/sass/**/*.scss', ['compile']);
});