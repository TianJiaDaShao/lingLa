#领啦项目框架

##1.项目页面

构建好的架构一共分为5个页面，分别为

index.html:主页

invite.html:邀请好友

mine.html:我的领啦

task.html:任务

try.html:试用

##2.页面接口

以index.html为例:

    index.html->prd/libs(引用库)
              ->src/scripts/index-app.js(js接口)
              ->src/styles/usage/page/index-app.scss(css接口)

##3.css接口

以index-app.scss为例：

    index-app.scss->common->common.scss(公共样式)
                  ->module->m-index.scss(模块样式)

##4.js接口

以index-app.js为例:

    index-app.js->tpls(htnl页面)
                ->utils(公共js)
                ->views(视图样式)

##5.mock接口

    分类api：'/api/FenLei.php'
    商品信息api：'/api/commodity.php'
    用户信息api：'/api/User.php'
    任务信息api：'/api/renWu.php'