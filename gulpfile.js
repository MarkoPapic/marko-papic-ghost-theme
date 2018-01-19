"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssmin = require("gulp-cssmin"),
	uglify = require("gulp-uglify"),
	zip = require("gulp-zip");

var paths = {
    root: "./"
};

paths.cssDest = paths.root + "assets/css";
paths.jsDest = paths.root + "assets/js";
paths.css = paths.root + "src/sass/transpiled/main.css";
paths.js = paths.root + "src/js/**/*.js";
paths.sass = paths.root + "src/sass/**/*.scss"
paths.sassDest = paths.root + "src/sass/transpiled";
paths.packageDest = paths.root + "package";

gulp.task("clean:sass", function (cb) {
    rimraf(paths.css, cb);
});

gulp.task("clean:css", function (cb) {
	rimraf(paths.cssDest + "/main.css", cb);
});

gulp.task("clean:js", function (cb) {
	rimraf(paths.jsDest + "/*", cb);
});

gulp.task("clean:package", function (cb) {
	rimraf(paths.packageDest + "/*", cb);
});

gulp.task("sass", function () {
	return gulp.src(paths.sass)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.sassDest));
});

gulp.task("min:css", ["sass"], function () {
	return gulp.src(paths.css)
		.pipe(cssmin())
		.pipe(gulp.dest(paths.cssDest));
});

gulp.task("min:js", function () {
	return gulp.src(paths.js)
		.pipe(uglify())
		.pipe(gulp.dest(paths.jsDest));
});

gulp.task("create:package", ["clean:package"], function () {
	return gulp.src(["./**", "!gulpfile.js", "!.gitignore", "!./.git", "!package-lock.json", "!node_modules", "!node_modules/**", "!src", "!src/**", "!package", "!package/**"])
		.pipe(zip("marko-papic.zip"))
		.pipe(gulp.dest(paths.packageDest));
});

gulp.task("clean", ["clean:sass", "clean:css", "clean:js"]);
gulp.task("build", ["min:css", "min:js"])
gulp.task("package", ["create:package"])