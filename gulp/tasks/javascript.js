import gulp from 'gulp'
import runSequence from 'run-sequence'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import paths from '../paths'

gulp.task('js', ()=>{
    return gulp.src(['./src/js/app.js'])
        .pipe(gulpWebpack(require('../webpack.config.js'), webpack))
        .pipe(gulp.dest(`${paths.distJs}`))
});

gulp.task('jsReload', (callback)=>{
    return runSequence(['js', 'bsReload'], callback)
});

