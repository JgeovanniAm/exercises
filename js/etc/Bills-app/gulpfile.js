const gulp = require('gulp');
const postcss = require('gulp-postcss');
//plugins
const csswring = require('csswring');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
//end plugins

gulp.task('styles', function() {
    //array que procesa los pluguins
    const processors = [
        csswring,
        autoprefixer({browsers:['last 2 version']}),
        cssnext
    ];
    // crea un dest : y ve lo que ahy en src 
    return gulp.src('css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dest'))
});
// va ver dest a el src
gulp.task('watch:styles' , function(){
    gulp.watch('css/*.css',['styles']);
})

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
    .pipe(concat('js/all.js'))
    .pipe(minify({
        ext:{
            min:'.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('dest'));
});

gulp.task('watch:scripts' , function(){
    gulp.watch('js/*.js',['scripts']);
})
