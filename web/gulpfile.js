var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var tsProject = ts.createProject("tsconfig.json");
var sourceMaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var tsLint = require("gulp-tslint");

gulp.task('default', function () {
    runSequence(
        'clean',
        'html',
        'javascript',
        'less',
        "tsLint",
        'ts'
    );
});

gulp.task('ts',  function () {
    return gulp.src(['src/**/*.ts']) //may need global typings config
        .pipe(sourceMaps.init())
        .pipe(tsProject())
        .on('error', function(err) {
            console.log("Typescript compilation failed")
        })
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('target/'));
});

gulp.task('html', function () {
    return gulp.src(["src/**/*.html"])
        .pipe(gulp.dest('target/'));
});

gulp.task('less', function () {
    return gulp.src(["src/**/*.less"])
        .pipe(less())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('target/'));
});

gulp.task('javascript', function () {
    return gulp.src("src/**/*.js")
        .pipe(gulp.dest('target/'));
});

gulp.task('clean', function () {
    return gulp.src('target/**/*', {read: false})
        .pipe(clean());
});

gulp.task('tsLint', function () {
    gulp.src(["src/**/*.ts", "!src/dto/*.ts"])
        .pipe(tsLint({}))
        .pipe(tsLint.report())
        .on('error', function(err) {
            console.log("tslint failed")
        })
});
