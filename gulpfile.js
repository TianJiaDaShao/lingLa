var gulp=require('gulp');
var webserver=require('gulp-webserver');
var sass=require('gulp-sass');
var minifyCSS=require('gulp-minify-css');
var fs=require('fs');
var url=require('url');
var named=require('vinyl-named');
var webpack=require('gulp-webpack');
var uglify=require('gulp-uglify');
var rev=require('gulp-rev');
var revCollector=require('gulp-rev-collector');
var sequence=require('gulp-sequence');




gulp.task('webserver',function () {
    gulp.src('./')
        .pipe(webserver({
            host:'localhost',
            port:80,
            directoryListing:{
                enable:true,
                path:'./'
            },
            livereload:true,
            middleware:function (req, res, next) {
                var urlObj=url.parse(req.url,true);
                switch (urlObj.pathname){
                    case '/api/FenLei.php':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/FenLei.json',function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/commodity.php':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/commodity.json',function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/User.php':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/User.json',function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/renWu.php':
                        res.setHeader('Content-Type','application/json');
                        fs.readFile('./mock/renWu.json',function (err, data) {
                            res.end(data);
                        });
                        return;
                }
                next();
            }
        }))
});//启动webserver

gulp.task('copy',function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./invite.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./mine.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./task.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./try.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./images/**/*')
        .pipe(gulp.dest('./prd/images/'));
});//拷贝网页及图片

var cssFiles=[
    './src/styles/usage/page/index-app.scss',
    './src/styles/usage/page/invite-app.scss',
    './src/styles/usage/page/mine-app.scss',
    './src/styles/usage/page/task-app.scss',
    './src/styles/usage/page/try-app.scss'
];
gulp.task('sass',function () {
    gulp.src(cssFiles)
        .pipe(sass().on('error',sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./prd/styles/'));
});//css处理

var jsFiles=[
    './src/scripts/index-app.js',
    './src/scripts/invite-app.js',
    './src/scripts/mine-app.js',
    './src/scripts/task-app.js',
    './src/scripts/try-app.js'
];
gulp.task('packjs',function () {
    gulp.src(jsFiles)
        .pipe(named())
        .pipe(webpack({
            output:{
                filename:'[name].js'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'imports?define=>false',
                        exclude: './prd/scripts/libs/zepto-min.js'
                    },
                    {
                        test: /\.string$/,
                        loader: 'string'
                    }
                ]
            }
        }))
});