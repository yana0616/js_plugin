import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('default', (callback)=>{
    return runSequence(
        'stylusReload',
        'pugReload',
        'jsReload',
        ['watch', 'server'],
        callback)
});
