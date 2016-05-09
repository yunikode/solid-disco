var gulp = require('gulp')
var postcss = require('gulp-postcss')

var cssnext = require('postcss-cssnext')
var precss = require('precss')
var color_rgba_fallback = require('postcss-color-rgba-fallback')
var opacity = require('postcss-opacity')
var pseudoelements = require('postcss-pseudoelements')
var vmin = require('postcss-vmin')
var pixrem = require('pixrem')
var will_change = require('postcss-will-change')
var atImport = require('postcss-import')
var mqpacker = require('css-mqpacker')
var cssnano = require('cssnano')

gulp.task('css', function() {
  var processors = [
    //atImport,
    precss,
    //mqpacker,
    /*cssnano({
      minifyFontValues: false,
      calc: { precision: 2 }
    }), */
    //will_change,
    //cssnext({ browsers: ['last 2 version'] }),
    //color_rgba_fallback,
    //opacity,
    //pseudoelements,
    //vmin,
    //pixrem
  ]
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})
