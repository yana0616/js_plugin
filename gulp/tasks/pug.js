import gulp from 'gulp'
import pug from 'gulp-pug'
import plumber from 'gulp-plumber'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'

import paths from '../paths'

gulp.task('pug', ()=>{
    return gulp.src([`${paths.srcPug}/*.pug`, `${paths.srcPug}/**/*.pug`, `!${paths.srcPug}/_partial/**/*.pug`])
    .on('error', console.error.bind(console))
    .pipe(plumber()).on('error', console.error.bind(console))
    .pipe(pug({
        pretty: true
    })).on('error', console.error.bind(console))
    .pipe(gulp.dest(`${paths.distHtml}`))
});

gulp.task('pugReload', (callback)=>{
    return runSequence(['pug', 'bsReload'], callback);
});