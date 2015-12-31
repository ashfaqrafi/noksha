var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Compile typescript sources
gulp.task('tsc', function() {  
    gulp.src(['source/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(tsc({
        module: 'commonjs',
        noImplicitAny: false,
        target: 'ES5',
        removeComments: false,
        noEmitOnError: false,
        preserveConstEnums: true
        }))
        .pipe(sourcemaps.write('./smaps'))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.stream());
});

// linting
gulp.task('tslint', function(){
    gulp.src('source/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('full'));
});

//browser-sync
gulp.task('serve', ['tsc'], function() {
    browserSync.init({
        server: './'
    });
});

// watching files
gulp.task('watch', function(){  
    gulp.watch('source/*.ts', ['tsc']);
    gulp.watch(['*.html']).on('change', browserSync.reload);
});

// default task
gulp.task('default', ['serve', 'tsc', 'watch']);