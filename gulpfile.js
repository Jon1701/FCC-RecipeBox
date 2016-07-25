////////////////////////////////////////////////////////////////////////////////
// Modules
////////////////////////////////////////////////////////////////////////////////
var gulp = require('gulp'); // Gulp.
var webserver = require('gulp-webserver'); // Gulp webserver.
var sass = require('gulp-sass'); // SASS.
var webpack = require('webpack-stream'); // Webpack.

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

// JSX
gulp.task('jsx', function() {
  gulp.src(srcPath + 'react-jsx/index.jsx')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            loader: 'babel'
          }
        ]
      },
      output: {
        filename: 'app.js'
      }
    }))
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

// Media
gulp.task('media', function() {

  // Placeholder images.
  gulp.src(srcPath + 'media/images/placeholders/*')
    .pipe(gulp.dest(destPath + 'media/images/placeholders/'));

});

////////////////////////////////////////////////////////////////////////////////
// Components
////////////////////////////////////////////////////////////////////////////////
gulp.task('components', function() {

  // Materialize
  gulp.src(modulesPath + 'materialize-css/dist/css/materialize.css')
    .pipe(gulp.dest(destPath + 'components/materialize/css/'));
  gulp.src(modulesPath + 'materialize-css/dist/fonts/**/*')
    .pipe(gulp.dest(destPath + 'components/materialize/fonts/'));
  gulp.src(modulesPath + 'materialize-css/dist/js/materialize.js')
    .pipe(gulp.dest(destPath + 'components/materialize/js/'));

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
      open: false
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
gulp.task('default', ['webserver', 'watch', 'fonts', 'jsx', 'stylesheets', 'html', 'media', 'components']);
