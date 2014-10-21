var gulp = require('gulp');
var plug = require("gulp-load-plugins")({lazy:false});
var pkg = require('./package.json');
var gutil = plug.loadUtils(['colors', 'env', 'log', 'date']);

/*
 * Could use a product/development switch.
 * Run `gulp --production`
 */
var type = gutil.env.production ? 'production' : 'development';
gutil.log( 'Building for', gutil.colors.magenta(type) );
//gutil.beep();

/*
 * Lint the code
 */
gulp.task('jshint', function () {
    return gulp.src(pkg.paths.source.js)
        .pipe(plug.jshint('.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src([pkg.paths.source.templates])
        .pipe(plug.angularTemplatecache('servabusi.templates.js',{standalone:true, 
                                        module:'servabusi.templates'}))
        .pipe(gulp.dest(pkg.paths.dest.js));
});

gulp.task('usemin', function() {
  gulp.src(pkg.paths.source.index)
    .pipe(plug.usemin({
      css: [plug.minifyCss(), 'concat', plug.rev()],
      js: [plug.uglify(), plug.rev()]
    }))
    .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('copyviews',function(){
    gulp.src(pkg.paths.source.html)
        .pipe(gulp.dest(pkg.paths.dest.html));
});

gulp.task('copyrootfiles',function(){
    gulp.src(pkg.paths.source.rootfiles)
        .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('copymodernizer',function(){
    gulp.src(pkg.paths.source.modernizer)
        .pipe(gulp.dest(pkg.paths.dest.jslib));
});


gulp.task('default', ['copymodernizer', 'jshint', 'copyviews', 'copyrootfiles', 
                'usemin'
                    ]);
