gulp 基本操作
    gulp 基本命令

    gulp.task   创建一个任务
    gulp.src    获取要处理的文件或目录(特定匹配模式)
    gulp.dest   处理后的文件输出
    gulp.watch  动态的监听文件更改

    安装gulp
    npm install gulp -g         先全局安装
    npm install gulp --save-dev 安装到项目开发依赖

    安装插件
    npm install gulp-stylus --save-dev  编译stylus的插件
    npm install gulp-minify-css --save-dev  压缩css插件

    gulpfile.js    gulp的配置文件

    执行 gulp
        gulp <taskname>

    编译 stylus 文件
        //先安装插件



    //压缩css文件
    gulp.task('minify',function(){
        return gulp.src('./public/**/*.css')
                .pipe(minifycss())
                .pipe(gulp.dest('./public/mincss'))
    })


   监听文件变更
        gulp.task('watcher',function(){
            gulp.watch('./stylus/**/*.styl')
        })

   通过gulp 启动node，并在文件变更后刷新浏览器
        npm install browser-sync --save-dev     //代理插件
        npm install gulp-nodemon --save-dev     //启动node程序