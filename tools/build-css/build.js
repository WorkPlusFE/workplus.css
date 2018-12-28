const path = require('path');

const rimraf = require('rimraf');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const pxtorem = require('postcss-pxtorem');
const cssnano = require('cssnano');
const stylefmt = require('stylefmt');
const insert = require('gulp-insert');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function clean(targetPath) {
  rimraf.sync(targetPath);
}

module.exports = (src, flags = {}, callback) => {
  const cwd = process.cwd();
  const { name, version, homepage } = require(`${cwd}/package.json`);

  const entryDir = path.isAbsolute(src) ? src : `${cwd}/${src}`;
  const outputDir = flags.outputDir || `${cwd}/dist`;
  const outputFile = flags.output || `${outputDir}/${name}.css`;
  const unablePxtorem = flags.unablePxtorem;
  const unableCompress = flags.unableCompress;

  const prependContent = `/*! ${name} v${version} ${homepage} */\n`;
  const moduleName = name.replace('@workplus-css/', '');

  const plugins = [
    atImport(),
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ];

  if (!unablePxtorem) {
    plugins.push(pxtorem({
      propList: [
        'font', 'font-size', 'line-height', 'letter-spacing',
        'width', 'max-width', 'min-width',
        'height', 'max-height', 'min-height',
        'margin*', 'padding*', 'border-radius'
      ]
    }));
  }

  plugins.push(cssnano());

  if (unableCompress) {
    plugins.push(stylefmt());
  }

  const distDir = path.dirname(outputFile);
  const distBasename = path.basename(outputFile);
  const callbackFn = () => {
    if (callback) callback({ name, version, homepage });
  };

  clean(outputDir);

  gulp.src(entryDir)
    .pipe(sourcemaps.init())
    .pipe(insert.prepend(prependContent))
    .pipe(postcss(plugins))
    .pipe(rename(distBasename))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distDir))
    .on('end', callbackFn);
};
