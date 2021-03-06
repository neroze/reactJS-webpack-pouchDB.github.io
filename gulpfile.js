var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpack = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var connect = require('gulp-connect'); 
var sass = require('gulp-sass');

// The development server (the recommended option for development)
gulp.task("default", ["webpack:build-dev",'sass']);

gulp.task("build-dev", ["webpack:build-dev"], function() {
	gulp.watch(["src/client/app/index.js"], ["webpack:build-dev"]);
});

var webpackBuilt = (_config) => {
	return gulp.src('src/client/index.js')
					  .pipe(webpack( _config ))
					  .pipe(gulp.dest('src/client/public/'))
					  .pipe(connect.reload());
}

var connectServer = function() {
  connect.server({
    root: ['./'],
    livereload: true,
    port:8083
  });
}

// for dev Env
gulp.task("webpack:build-dev", (webpack) => {
	var myDevConfig = Object.assign(Object.create(webpackConfig),{ plugins:[]});
	myDevConfig.devtool = "sourcemap";
	myDevConfig.debug = true;
	
 	return webpackBuilt(myDevConfig);

});

gulp.task('sass', function () {
  return gulp.src('src/client/scss/**/*.sass')
  	.pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('src/client/css/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
	connectServer();
	gulp.start('sass');
	gulp.start('webpack:build-dev');
  gulp.watch('src/client/app/**/*.js', ['webpack:build-dev']);
  gulp.watch('src/client/scss/**/*.sass', ['sass']);
});

// for production
gulp.task("build-prod", ["webpack:build-prod"], function() {
	// /gulp.watch(["src/client/app/index.js"], ["webpack:build-dev"]);
});

// for dev Env
gulp.task("webpack:build-prod", (callback) => {
	var myDevConfig = Object.create(webpackConfig);
	myDevConfig.output.filename = "bundle.min.js";
	
 	return webpackBuilt(myDevConfig);

});