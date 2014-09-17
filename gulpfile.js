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
gutil.beep();

/*
 * Lint the code
 */
gulp.task('jshint', function () {
    return gulp.src(pkg.paths.source.js)
        .pipe(plug.jshint('.jshintrc'))
//        .pipe(plug.jshint.reporter('default'));
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html',
        "!./app/scripts/lib/**/*.html"])
        .pipe(plug.angularTemplatecache('templates.js',{standalone:true, module:'templates'}))
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


gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.css'        
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plug.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plug.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));


gulp.task('default', ['jshint', 'copyviews', 'copyrootfiles', 'copymodernizer', 'usemin']);