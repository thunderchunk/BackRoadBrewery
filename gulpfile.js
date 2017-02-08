//require gulp

var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sassimport = require("gulp-sass");
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon')

//locate paths

var paths = {
   jsSource: ['./public/app/**/*.js'],
   sassSource: ['./public/app/**/*.scss'],
   server: ['server/index.js']
};

// start nodemon  // uncomment when server setup 
gulp.task('serve', function() {
    nodemon({
        'script': paths.server[0]
    });
});

//define bundle
gulp.task('scss', function() {
   gulp.src(paths.sassSource)
       .pipe(concat('bundle.css'))
       .pipe(sassimport())
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
   gulp.src(paths.jsSource)
      // .pipe(babel()) //Uncomment if using ES6
       .pipe(annotate())
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest('./public/dist'));
});

//make it watch for changes

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['scss']);
});

gulp.task('default', ['js', 'scss', 'watch' , 'serve' ]);  //uncomment serve when ready for nodemon
