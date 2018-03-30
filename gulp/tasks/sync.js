import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.task('server', ()=>{
    return browserSync({
        server: {
            baseDir: './dist/'
        }
    })
});

gulp.task('bsReload', ()=>{
    return browserSync.reload();
});