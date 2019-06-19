const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copy', function () {
    return gulp.src('publish/index.html')
        .pipe(gulp.dest('.'))
        .pipe(rename('404.html'))
        .pipe(gulp.dest('.'))
});
