// 各処理メソッドを、gulpの中で読み込むのではなく、直接取り出す
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
  return gulp.src('styles/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets'))
      .pipe(sass({outputStyle: 'expanded'}))
});


gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series('sass'));
});