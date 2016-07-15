////////////////////////////////////////////////////////////////////////////////
// Modules
////////////////////////////////////////////////////////////////////////////////
var gulp = require('gulp'); // Gulp.
var webserver = require('gulp-webserver'); // Gulp webserver.
var sass = require('gulp-sass'); // SASS.
var babel = require('gulp-babel'); // JSX to ES6 transpiler.

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = './source/';
var destPath = './build/';
var modulesPath = './node_modules/';

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

// Fonts
gulp.task('fonts', function() {
  gulp.src(srcPath + 'fonts/**/*')
    .pipe(gulp.dest(destPath + 'fonts/'));
});

// JSX.
gulp.task('jsx', function() {
  gulp.src(srcPath + 'react-jsx/*')
    .pipe(babel({ presets: ['es2015', 'react'] }))
    .pipe(gulp.dest(destPath + 'javascript/'));
});

// Compile .scss and move.
gulp.task('stylesheets', function() {
  gulp.src(srcPath + 'stylesheets/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destPath + 'stylesheets/'));
});

// Move .html.
gulp.task('html', function() {
  gulp.src(srcPath + '*.html')
    .pipe(gulp.dest(destPath));
});

////////////////////////////////////////////////////////////////////////////////
// Components.
////////////////////////////////////////////////////////////////////////////////

// Bootstrap grid.
gulp.task('bootstrap', function() {

  // Stylesheet.
  gulp.src(srcPath + 'components/bootstrap-grid/css/bootstrap.css')
    .pipe(gulp.dest(destPath + 'components/bootstrap-grid/css/'))

});

// React.
gulp.task('react', function() {

  // ReactJS
  gulp.src(modulesPath + 'react/dist/react.js')
    .pipe(gulp.dest(destPath + 'components/react/'));

  // ReactDOM
  gulp.src(modulesPath + 'react-dom/dist/react-dom.js')
    .pipe(gulp.dest(destPath + 'components/react/'));

});

////////////////////////////////////////////////////////////////////////////////
// Webserver
////////////////////////////////////////////////////////////////////////////////
gulp.task("webserver", function() {
  gulp.src(destPath)
    .pipe(webserver({
      fallback: "index.html",
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

////////////////////////////////////////////////////////////////////////////////
// Watch task
////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function() {
  gulp.watch(srcPath + 'react-jsx/*.jsx', ['jsx']); // JSX files.
  gulp.watch(srcPath + 'stylesheets/**/*.scss', ['stylesheets']); // SASS Main.
  gulp.watch(srcPath + 'stylesheets/**/_*.scss', ['stylesheets']); // SASS Partials.
  gulp.watch(srcPath + '*.html', ['html']);
});

////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['webserver', 'watch', 'fonts', 'jsx', 'stylesheets', 'html', 'bootstrap', 'react']);
