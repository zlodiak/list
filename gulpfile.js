var gulp = require('gulp');  
var browserify = require('gulp-browserify');  
var concat = require('gulp-concat');  
var styl = require('gulp-styl');  




gulp.task('styles', function() {  
    gulp.src(['css/**/*.css'])
        .pipe(styl({compress : true}))
        .pipe(gulp.dest('build'))
});

gulp.task('scripts', function() {  
    gulp.src([
            'js/project/modules.js',
            'js/project/services/initDataService.js',
            'js/project/controllers/newsFeedController.js',
            'js/project/controllers/modalController.js',
            'js/project/directives/modalDirective.js'
        ])
        .pipe(browserify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build'))
});



gulp.task('default', function() {  
    gulp.run('styles', 'scripts');

    gulp.watch('css/**', function(event) {
        gulp.run('styles');
    });

    gulp.watch('js/project/**', function(event) {
        gulp.run('scripts');
    })    
})