var gulp = require('gulp'),
    tsc = require('gulp-typescript');

// Compile typescript sources
gulp.task('tsc', function() {  
    gulp.src(['source/*.ts'])
        .pipe(tsc({module: 'commonjs'}))
        .js
        .pipe(gulp.dest('js/'));
});

// watching files
gulp.task('watch', function() {  
    gulp.watch('source/*.ts', ['tsc']);
});

// default task
gulp.task('default', ['tsc', 'watch']);
