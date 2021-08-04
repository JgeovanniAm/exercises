const gulp = require('gulp');
const postcss = require('gulp-postcss');
//plugins
const csswring = require('csswring');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
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
    return gulp.src('src/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./src/dest'))
});
// va ver dest a el src
gulp.task('watch:styles' , function(){
    gulp.watch('src/**/*.css',['styles']);
})

gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/scripts'));
});