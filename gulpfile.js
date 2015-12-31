var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');

// Compile typescript sources
gulp.task('tsc', function() {  
    gulp.src(['source/*.ts'])
        .pipe(tsc({
        module: 'commonjs',
        noImplicitAny: false,
        target: 'ES5',
        removeComments: false,
        noEmitOnError: false,
        preserveConstEnums: true
        }))
        .js
        .pipe(gulp.dest('js/'));
});

// linting
gulp.task('tslint', function(){
    gulp.src('source/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('full'));
});

// watching files
gulp.task('watch', function(){  
    gulp.watch('source/*.ts', ['tsc']);
});

// default task
gulp.task('default', ['tsc', 'watch']);