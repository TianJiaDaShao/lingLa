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
                    case '/api/shouye.php':
                        res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/shouye.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/applicant.php':
                        res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/applicant.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/task.php':
                        res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/task.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/taskRefresh.php':
                        res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/task-refresh.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                    case '/api/taskMore.php':
                        res.setHeader('Content-Type', 'application/json');
                        fs.readFile('./mock/task-more.json', function (err, data) {
                            res.end(data);
                        });
                        return;
                }
                next();
            }
        }))
});//启动webserver

gulp.task('copy',function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('./prd'));
    gulp.src('./images/**/*')
        .pipe(gulp.dest('./prd/images/'));
});//拷贝网页及图片

gulp.task('sass',function () {
    gulp.src('./src/styles/usage/page/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./prd/styles/'));
});//css处理

var jsFiles=[
    './src/scripts/*.js'
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
        .pipe(gulp.dest('./prd/scripts/'));
});

gulp.task('watch',function () {
    gulp.watch('./*.html',['copy']);
    gulp.watch('./images/**/*',['copy']);
    gulp.watch('./src/styles/**/*',['sass']);
    gulp.watch('./src/scripts/**/*',['packjs'])
});

gulp.task('default',['watch','webserver'],function () {
    console.log('任务列队执行完成');
});