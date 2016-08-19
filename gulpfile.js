var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});