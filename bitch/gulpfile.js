'use strict';
var gulp = require('gulp');
var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var wiredep = require('wiredep').stream;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var bower = require('bower-files')();
var spawn = require('child_process').spawn;
var argv = require('yargs').argv;

var files = {
	views: {
		src: './sources/views/*.jade',
		dest: './public/'
	},
	subViews: {
		src: './sources/views/pages/*.jade',
		dest: './public/'
	},
	uiViews: {
		src: './sources/views/ui/*.jade',
		dest: './public/ui/'
	},
	styles: {
		src: './sources/styles/*.scss',
		dest: './public/styles/'
	},
	scripts: {
		src: './sources/scripts/*.js',
		dest: './public/scripts/'
	},
	sprites: {
		src: './sources/sprites/*.png',
		dest: './public/images/sprites/'
	}
};

var onError = function (err) {
	switch (err.plugin) {
		case 'gulp-sass':
			// from function sass.logError
			var message = new gutil.PluginError('gulp-sass', err.messageFormatted).toString();
		  process.stderr.write(message + '\n');
		 	break;
		case 'gulp-jade':
			var message = new gutil.PluginError('gulp-jade', err.message).toString();
			process.stderr.write(message + '\n');
			break;		
	}
	gutil.beep();
};


gulp.task('serve', function() {
	browserSync.init({
		server: {
      baseDir: './public'
    },
    notify: false,
    reloadDelay: 100,
    open: false
	});
});

gulp.task('sprites', function() {
	var options = {
		imgName: 'sprites.png',
		cssName: 'sprite-vars.scss',
		imgPath: '../images/sprites/sprites.png',
		algorithm: 'binary-tree',
		engine: 'pngsmith',
		cssVarMap: function (sprite) {
			sprite.name = 'sprite-'+sprite.name;
		}
	};
	var sprite = gulp.src(files.sprites.src)
		.pipe(plumber())
		.pipe(spritesmith(options));

	sprite.img.pipe(gulp.dest(files.sprites.dest));
	sprite.css.pipe(gulp.dest('./sources/styles/components/'));
});

gulp.task('styles', function() {
	var options = {
		outputStyle: 'compressed'
	};

	gulp
		.src(files.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass(options).on('error', onError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(files.styles.dest))
		.pipe(browserSync.stream())
});

gulp.task('scripts', function() {
	gulp
		.src(files.scripts.src)
		.pipe(concat('app.js'))
		.pipe(gulp.dest(files.scripts.dest));
});

gulp.task('compile-views', function() {
	gulp
		.src(files.views.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jade())
		.pipe(gulp.dest(files.views.dest));

	gulp
		.src(files.subViews.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jade())
		.pipe(gulp.dest(files.subViews.dest));

	gulp
		.src(files.uiViews.src)
		.pipe(plumber({ errorHandler: onError }))
		.pipe(jade())
		.pipe(gulp.dest(files.uiViews.dest));
});

gulp.task('dependencies', function() {
	gulp
		.src(bower.ext('js').files)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch-gulpfile', function() {
	var process;
	gulp
		.watch('gulpfile.js', function(e) {
			if (process)
				process.kill();
			var task = argv.task ? argv.task : 'default';
			process = spawn('gulp', [], {stdio: 'inherit'});
		});
});

gulp.task('watch', function() {
	gulp
		.watch('./sources/views/**/*.jade', ['dependencies', 'compile-views', browserSync.reload]);

	gulp
		.watch('./sources/styles/**/*.scss', ['styles']);

	gulp
		.watch('./sources/scripts/**/*.js', ['scripts', browserSync.reload]);

});

gulp.task('default', ['dependencies', 'compile-views', 'serve', 'sprites', 'styles', 'scripts', 'watch-gulpfile', 'watch']);