import gulp from 'gulp'
import stylus from 'gulp-stylus'
import pleeease from 'gulp-pleeease'
import axis from 'axis'
import jeet from 'jeet'
import rupture from 'rupture'
import plumber from 'gulp-plumber'
import csscomb from 'gulp-csscomb'
import uncss from 'gulp-uncss'
import header from 'gulp-header'
import runSequence from 'run-sequence'
import browserSync from 'browser-sync'

import paths from '../paths'

gulp.task('stylus', ()=>{
    return gulp.src([`${paths.stylusPath}/*.styl`, `!${paths.stylusPath}/_*/*.styl`, `!${paths.stylusPath}/_*/**/*.styl`])
        .pipe(plumber())
        .pipe(stylus({
            use: [axis(), jeet(), rupture()]
        }))
        .pipe(pleeease({
            stylus: true,
            minifier: false,
            autoprefixer: {
                "browsers": ["last 4 versions"]
            },
            mqpacker: true
        }))
        .pipe(csscomb()).on('error', console.error.bind(console))
        // .pipe(uncss({
        //     html: [`${paths.distHtml}**.html`, `${paths.distHtml}**/**.html`],
        //     ignore: [/.is_/,/:placeholder/,/::-webkit/,/.remodal/,/.slider-pro/,/.sp-/,/.tns-/]
        // }))
        .pipe(header('@charset "utf-8";\n'))
        .pipe(gulp.dest(`${paths.distCss}`))
        .pipe(browserSync.stream())
});

gulp.task('stylusReload', (callback)=>{
    return runSequence(['stylus', 'bsReload'], callback)
});