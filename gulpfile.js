/**
 * Created by Administrator on 2016/12/8 0008.
 */
//首先引入gulp模块
var gulp=require('gulp');
//引入 gulp-stylus插件
var stylus=require('gulp-stylus');
//引入压缩css的文件
var minifycss=require('gulp-minify-css');
//gulp-uglify
var uglify=require('gulp-uglify');

var browserSync=require('browser-sync').create();
var reload=browserSync.reload;
//install gulp-nodemon --save-dev
var nodemon=require('gulp-nodemon');
gulp.task('nodemon',function(ab){
    var ft=false;
    return nodemon({
        script:'./server.js'
    }).on('start',function(){
        if(!ft){
            ab();
            ft=true
        }
    })
});

gulp.task('browserSync',['nodemon'],function(){
    browserSync.init({
        proxy:{
            target:'http://127.0.0.1:16934'
        },
        files:['*'],
        port:9800,
        open:false,
        notify:false

    })
})


//创建一个编译stylus的任务
gulp.task('stylus', function () {
    return gulp.src('./stylus/**/*.styl')   //需要编译的文件
        .pipe(stylus())                     //执行编译方法
        .pipe(gulp.dest('./public/css'));   //编译后输出的目录

    //获取要编译的文件,指定一个文件
    //gulp.src('./stylus/index.styl')
    //指定多个文件
    //gulp.src(['./stylus/index.styl','./stylus/css.styl'])
    //指定一个目录下所有
    //gulp.src('./stylus/*.styl')
    //指定一个目录以及所有子目录下的文件
    //gulp.src('./stylus/**/*.styl')
          //执行stylus编译
          //.pipe(stylus())
          //输出编译后的文件
         // .pipe(gulp.dest('./public/css'))
});




gulp.task('minifycss',['stylus'], function () {
    return gulp.src('./public/css/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public/mincss'))
});

gulp.task('uglify', function () {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/minjs'))
});

gulp.task('watcher', ['browserSync','stylus','uglify'],function(){
    gulp.watch('./stylus/**/*.styl',['stylus']);
    gulp.watch('./pudlic/js/**/*.js',['uglify']);

    gulp.watch([
        './public/css/**/*.css',
        './public/minijs/**/*.js'
    ]).on('change', function () {
        reload();
    });
});
/*//先执行es6，执行完后再执行minijs
gulp.task('minijs',['es6'],function(){
    console.log('this is minijs')
});*/

/*//创建一个执行其他任务的任务
gulp.task('all',['logs','es6','css'], function () {
    console.log('this is all')
});*/

//创建一个default任务
gulp.task('default',function(){
    console.log('this default')
});