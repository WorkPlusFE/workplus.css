const path = require('path');

const gulp = require('gulp');
const { clean, buildCss } = require('@workplus-css/build-css');

const pkg = require('./package.json');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const prependContent = `/*! ${pkg.name} v${pkg.version} ${pkg.homepage} */\n`;
const outputPkgName = pkg.name.replace('@workplus-css/', '');

gulp.task('default', ['build'], () => {
    gulp.watch([
        `${SRC_DIR}/**/*`
    ], ['build']);
});

gulp.task('build', ['clean:dist', 'build:css', 'build:css:min']);

gulp.task('clean:dist', () => {
    clean(DIST_DIR);
});

gulp.task('build:css', (callback) => {
    buildCss({
        src: `${SRC_DIR}/${outputPkgName}.css`,
        dist: `${DIST_DIR}/${outputPkgName}.css`,
        prependContent,
        callback
    });
});

gulp.task('build:css:min', (callback) => {
    buildCss({
        src: `${SRC_DIR}/${outputPkgName}.css`,
        dist: `${DIST_DIR}/${outputPkgName}.min.css`,
        enableCompress: true,
        prependContent,
        callback
    });
});
