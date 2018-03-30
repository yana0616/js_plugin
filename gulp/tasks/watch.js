import gulp from 'gulp'
import paths from '../paths'

gulp.task('watch', ()=>{
    gulp.watch([`${paths.srcPug}/*.pug`, `${paths.srcPug}/**/*.pug`], ['pugReload']);
gulp.watch([`${paths.stylusPath}/*.styl`, `${paths.stylusPath}/_*/*.styl`, `${paths.stylusPath}/_*/**/*.styl`],['stylusReload']);
gulp.watch([`src/js/*.js`, `src/js/util/*.js`], ['jsReload']);
gulp.watch([`src/js/lib/*.js`], ['jsBundle', 'bsReload']);
gulp.watch([`src/js/*.js`, `!src/js/app.js`, `!src/js/ua.js`], ['copyjs']);
gulp.watch([`${paths.srcJson}/*.json`], ['distjson', 'bsReload']);
// gulp.watch([`${paths.srcImg}/svg/*.svg`], [`svg-sprite`]);
gulp.watch([`${paths.srcImg}/*.+(jpg|jpeg|png|gif|svg)`, `${paths.srcImg}/**/*.+(jpg|jpeg|png|gif|svg)`], ['cleanimg', 'copyimg']);
});