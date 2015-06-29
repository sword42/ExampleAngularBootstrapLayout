var gulp = require('gulp');
var $ = require("gulp-load-plugins")({lazy:false});
var pkg = require('./package.json');
var webserver = require('gulp-webserver');


/*
 * Lint the code
 */
gulp.task('jshint', function () {
    return gulp.src(pkg.paths.source.js)
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src([pkg.paths.source.templates])
        .pipe($.angularTemplatecache('demo.templates.js',{standalone:true, 
                                        module:'demo.templates'}))
        .pipe(gulp.dest(pkg.paths.dest.js));
});

gulp.task('usemin', ['sass'], function() {
  gulp.src(pkg.paths.source.index)
    .pipe($.usemin({
      css: [$.minifyCss(), 'concat', $.rev()],
      js: [$.uglify(), $.rev()],
      js1: [$.uglify(), $.rev()]
    }))
    .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('copyviews',function(){
    gulp.src(pkg.paths.source.templates)
        .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('copyrootfiles',function(){
    gulp.src(pkg.paths.source.rootfiles)
        .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('copymodernizer',function(){
    gulp.src(pkg.paths.source.modernizer)
        .pipe(gulp.dest(pkg.paths.dest.jslib));
});

gulp.task('sass', function () {
    gulp.src(pkg.paths.source.sass)
        .pipe($.sass())
        .pipe(gulp.dest(pkg.paths.dest.css));
});


gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: false,
      fallback: "1.html"
    }));
});

gulp.task('devfiles', ['default'], function() {
    gulp.src(pkg.paths.source.devfiles)
        .pipe(gulp.dest(pkg.paths.dest.base));
});

gulp.task('watch', function () {
    gulp.watch(pkg.paths.source.rootfiles, ['copyrootfiles']);
    gulp.watch(pkg.paths.source.html, ['copyviews']);
    gulp.watch(pkg.paths.source.index, ['usemin']);
    gulp.watch(pkg.paths.source.templates, ['templates']);
    gulp.watch(pkg.paths.source.js, ['jshint', 'usemin']);
    gulp.watch(pkg.paths.source.sass, ['sass']);
});

gulp.task('serve', ['webserver', 'devfiles', 'watch'], function () {

});

gulp.task('default', ['copymodernizer', 'jshint', 'copyviews', 'copyrootfiles', 
                'usemin'
                    ]);
