const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function estilo(){
    return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './',
            index: '/index.html'
        }
    });
    gulp.watch('src/sass/*.scss', estilo);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.estilo = estilo;
exports.watch = watch;