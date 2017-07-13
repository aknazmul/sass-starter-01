const gulp = require('gulp');
    sass   = require('gulp-sass');

gulp.task('style', () =>{
    return gulp.src('sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () =>{
    gulp.watch('./sass/**/*.scss', ['style']);
});

gulp.task('default', ['style']);


