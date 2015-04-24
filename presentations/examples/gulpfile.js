var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    stylus = require('gulp-stylus');



gulp.task('less', function(){
	gulp.src('./less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./css/less/'))
})

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/sass/'))
});

gulp.task('stylus', function(){
  gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/stylus/'))
        .pipe(livereload());
});

 gulp.task('watch', function(){
      livereload.listen();
   		gulp.watch(['./*.less'],['less']);
      gulp.watch(['./*.scss'],['sass']);
      gulp.watch(['./*.styl'],['stylus']);
  	 /* gulp.start('server');*/
  });
 
 gulp.task('default',['watch','less', 'sass', 'stylus']);