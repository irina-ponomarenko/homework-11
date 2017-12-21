var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    compass = require('gulp-compass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    csso = require('gulp-csso'),
    browserSync = require('browser-sync');

var config = {
    'src': './src',
    'dest': './dist',
    'html': {
        'src': './src/*.html',
        'dest': './dist/'
    },
    'sass': {
        'dest': './dist/styles/css',
        'src': './src/styles/scss/style.scss'
    },
    'js': {
      'src': [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/tether/dist/tether.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './src/js/*.js'
      ],
      'dest': './dist/js'
    },
    'img': {
        'dest': './dist/images/',
        'src': './src/images/*'
    }
};

gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.html.dest));
});

gulp.task('minify:img', function () {
    return gulp.src(config.img.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.img.dest));
  }
);
gulp.task('sass', function() {
    return gulp.src('src/styles/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts', function() {
    return gulp.src(config.js.src)
        .pipe(concat('my.js'))
        .pipe(uglify().on('error', function (e) {
            console.log(e);
        }))
        .pipe(gulp.dest(config.js.dest));
});



gulp.task('build',['copy:html', 'minify:img', 'scripts','sass'], function () {});

gulp.task('watch', function () {
    gulp.watch([
        config.sass.path + '/**/*.scss',
        config.js.path + '/**/*.js',
        config.html.src
    ], ['build']);
});