const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
    return gulp.src('./pages/main/style/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./pages/main/style/css/'))
})
gulp.task('sass-compile-two', function() {

    return gulp.src('./pages/pets/style/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./pages/pets/style/css/'))
})

gulp.task('watch', function() {
    gulp.watch('./pages/main/style/scss/*.scss', gulp.series('sass-compile'))
    gulp.watch('./pages/pets/style/scss/*.scss', gulp.series('sass-compile-two'))
})