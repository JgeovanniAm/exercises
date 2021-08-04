const gulp = require('gulp');
const postcss = require('gulp-postcss');
//plugins
//const csswring = require('csswring');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
// puglin apply //
const apply = require('postcss-apply');
//end plugins


gulp.task('styles', function() {
    //array que procesa los plugiins
    const processors = [
        //csswring,
        autoprefixer({browsers:['last 2 version']}),
        cssnext,
        apply
        
    ];
    // crea un dest : y ve lo que ahy en src 
    return gulp.src('src/**/*.css')

    /*  QUE ES PIPE: Una  función de tubería toma una secuencia de operaciones; 
        en el que cada operación toma un argumento; procesalo; y da la salida procesada 
        como una entrada para la siguiente operación en la secuencia. El resultado de una 
        función de canalización es una función que es una versión agrupada de 
        la secuencia de operaciones.
    */
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'))
});
// va ver dest a el src
gulp.task('watch:styles' , function(){
    gulp.watch('src/**/*.css',['styles']);
})