var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('generate-css', function() {
	gulp
		.src('./sources/sass/*.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./public/styles'));
});