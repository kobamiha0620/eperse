// 各処理メソッドを、gulpの中で読み込むのではなく、直接取り出す
// const {src, dest} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const sassGlob = require("gulp-sass-glob-use-forward");
const cleancss = require("gulp-clean-css");

const sassGlob2 = require("gulp-sass-glob");
const autoprefixer = require('gulp-autoprefixer');
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slideshow = () => {
  //これだとpaginationとかが使えない
  const option = {
    loop:true,
    slidesPerView: 1,
    speed:1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  const swiper = new Swiper('.swiper', option);
}
export default Slideshow;

gulp.task('sass', function(){
  return gulp
      .src('styles/*.scss')
      .pipe(plumber())                   // watch中にエラーが発生してもwatchが止まらないようにする
      .pipe(sassGlob2())

      .pipe(sassGlob())
      .pipe(sass({
        includePaths: require('node-reset-scss').includePath,
        outputStyle: 'compressed'
      }))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cleancss())                             // コード内の不要な改行やインデントを削除

      .pipe(gulp.dest('assets'))

  });
  


gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series('sass'));
});
