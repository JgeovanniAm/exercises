// postcss
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');

const eslint = require('gulp-eslint');
const connect = require('gulp-connect');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const open = require('gulp-open');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const csswring = require('csswring');


gulp.task('styles', () => {
  const processors = [
    autoprefixer({
      'overrideBrowserslist': [
        'last 1 version',
        '> 1%',
        'maintained node versions',
        'not dead'
      ]
    }),
    cssnext,
    csswring
  ];
  return gulp.src('src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dest/css'))
});
//---------------------------------------------

gulp.task('watch:styles', () => {
  gulp.watch('src/css/*.css', gulp.series('styles'));
})

//---------------------------------------------

gulp.task('registerScript', () => {
  return gulp.src(['./src/js/Api.js', './src/js/formRegister.js', './src/js/signUp.js', './src/js/singIn.js'])
    .pipe(concat('js/register.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dest'));
});

gulp.task('gameApp', () => {
  return gulp.src(['./src/js/Api.js', './src/js/game.js', './src/js/newQuestion.js', './src/js/viewPlay.js'])
    .pipe(concat('js/game.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dest'));
});

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dest'));
});

gulp.task('watch:scripts', () => {
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch('src/js/*.js', gulp.series('scripts2'));
})


gulp.task('lint', () => (
  gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
));

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

// Dev server.

gulp.task('connect', () => {
  connect.server({
    port: 8080,
    livereload: true,
    root: 'dest'
  });
});

gulp.task('open', () => {
  gulp.src(__filename)
    .pipe(open({ uri: 'http://localhost:8080/' }));
});

gulp.task('reload', () => {
  gulp.src(__filename)
    .pipe(connect.reload());
});

//
// Watch task.
//

// first: run start and after that - run build
//

gulp.task('build', gulp.parallel('styles', 'gameApp', 'registerScript', 'minify'));

gulp.task('start', gulp.parallel('connect', 'open', 'lint', 'watch:styles', 'sass'));

