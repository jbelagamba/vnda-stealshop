var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
/*
 * Variables
 */
// Watch Files
var watchFiles = ['./src/**/*.scss', './src/**/*.js', './src/*.html', ];

// Sass Source
var scssFiles = './src/scss/style.scss';

// Sass Source
var jsFiles = './src/js/*.js';

// CSS destination
var cssDest = './dist/css';

// JS destination
var jsDest = './dist/js';


// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

gulp.task('jsdev', function() {
  return gulp.src(jsFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(jsDest));
});

gulp.task('jsprod', function (cb) {
  pump([
        gulp.src('dist/js/app.js'),
        uglify(),
        rename('app.min.js'),
        gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

// Task 'watch' - Run with command 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(watchFiles, gulp.series(['sassdev', 'sassprod', 'jsdev', 'jsprod', 'minify']));
});

gulp.task('default', gulp.series(['sassdev', 'sassprod', 'jsdev', 'jsprod', 'minify', 'watch']));
