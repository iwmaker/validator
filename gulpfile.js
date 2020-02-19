const {
  src, dest, series
} = require('gulp');

const clean = (cb) => {
  const rimraf = require('rimraf').sync;
  rimraf('dist');
  cb();
};

const build = (cb) => {
  const uglify = require('gulp-uglify');
  const babel = require('gulp-babel');
  const babelConf = {
    presets: ['@babel/env']
  };

  src('src/**/*.js')
    .pipe(babel(babelConf))
    .pipe(uglify())
    .pipe(dest('dist'));

  cb();
};

exports.default = series(clean, build);