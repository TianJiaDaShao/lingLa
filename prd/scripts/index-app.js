/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/29.
	 */
	__webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);
	var footer = __webpack_require__(4);

	var common = __webpack_require__(5);
	var iscrollUtil = __webpack_require__(6);

	common.renderBody($('body'), str);
	common.append($('.container'), footer);
	common.switchPage(0);


	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop:true,
		pagination : '.swiper-pagination'
	});
	var mySwiper2 = new Swiper('.swiper-container2', {
		autoplay: 3000,//可选选项，自动滑动
		loop:true,
		pagination : '.swiper-pagination'
	});


	  listload();
	function listload(){
	    $.ajax({
	    url: '/api/shouye.php',
	    success: function(data) {
	        for (var i = 0; i < data.length; i++) {
	            $('.shouyebox>li').eq(i).html(template('test' + i, data[i]));
	        }
	    },
	    error: function(data) {
	        console.log("ajax错误")
	    },
	    dataType: 'json'
	})
	}
	var isplay = false;
	window.onload = function(){
	$("#fenlei1").on('tap',function(){
		if(!isplay){
		$(".alllist").css({"display":"block"});
		isplay = true;
		}else
		{
			$(".alllist").css({"display":"none"});
			isplay = false;
		}
	});
	$("#qiandao2").on('tap',function(){
		alert("签到成功");
	});
	$(".sublist").on('tap',function(){
		$(".alllist").css({"display":"none"});
	})
	}



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>		<ul>			<li id=\"fenlei1\" class=\"iconfont\">&#xe60b;<b>分类</b></li>			<li>				<div class=\"box\">					<input type=\"text\" id=\"ser\" value=\"搜索试用商品\" />					<i class=\"iconfont\">&#xe601;</i>				</div>			</li>			<li id=\"qiandao2\" class=\"iconfont\">&#xe62b;<b>签到</b></li>		</ul>	</header>	<div class=\"boxcontent\">		<div class=\"alllist\">			<ul>				<li class=\"sublist\">服装鞋包</li>				<li class=\"sublist\">手机数码</li>				<li class=\"sublist\">家用电器</li>				<li class=\"sublist\">美妆饰品</li>				<li class=\"sublist\">母婴用品</li>				<li class=\"sublist\">百货建材</li>				<li class=\"sublist\">日用家具</li>				<li class=\"sublist\">美食特产</li>				<li class=\"sublist\">运动户外</li>				<li class=\"sublist\">文化娱乐</li>			</ul>		</div>		<div class=\"box2\">			<div class=\"swiper-container\">				<div class=\"swiper-wrapper\">					<div class=\"swiper-slide\"><img src=\"../../../images/banner1.jpg\" /></div>					<div class=\"swiper-slide\"><img src=\"../../../images/banner2.jpg\" /></div>					<div class=\"swiper-slide\"><img src=\"../../../images/banner3.gif\" /></div>				</div>				<div class=\"swiper-pagination\"></div>			</div>			<ul class=\"nav111\">				<li><i class=\"iconfont\">&#xe610;</i><b>免费试用</b>				</li>				<li><i class=\"iconfont\">&#xe62f;</i><b>新手入门</b>				</li>				<li><i class=\"iconfont\">&#xe62a;</i><b>金币抽奖</b>				</li>				<li><i class=\"iconfont\">&#xe618;</i><b>转发任务</b>				</li>			</ul>			<div class=\"tuijian\">				<div class=\"zuoxian\">				</div>				<div class=\"wenzi\">					<i class=\"iconfont\">&#xe617;</i>&nbsp;推荐试用				</div>				<div class=\"youxian\">				</div>				<div class=\"more\">					更多 >				</div>			</div>			<div class=\"swiper-container2\">				<div class=\"swiper-wrapper\">					<div class=\"swiper-slide\">						<ul>							<li><img src=\"../../../images/pic1.jpg\" /><b>宝塔螺丝工具套装一套</b></li>							<li><img src=\"../../../images/pic2.jpg\" /><b>迷你小音箱</b></li>							<li><img src=\"../../../images/pic3.png\" /><b>迷你台灯试用</b></li>						</ul>					</div>					<div class=\"swiper-slide\">						<ul>							<li><img src=\"../../../images/pic4.jpg\" /><b>宁夏枸杞半斤</b></li>							<li><img src=\"../../../images/pic5.jpg\" /><b>无线鼠标，颜色随机</b></li>							<li><img src=\"../../../images/pic6.jpg\" /><b>LED充电式手电筒</b></li>						</ul>					</div>					<div class=\"swiper-slide\">						<ul>							<li><img src=\"../../../images/pic7.jpg\" /><b>喷漆奥绒单件床单</b></li>							<li><img src=\"../../../images/pic8.jpg\" /><b>家用美的电烤箱</b></li>							<li><img src=\"../../../images/pic9.JPG\" /><b>送拖鞋</b></li>						</ul>					</div>				</div>			</div>			<div class=\"tuijian\">				<div class=\"zuoxian\">				</div>				<div class=\"wenzi\">					<i class=\"iconfont\">&#xe625;</i>&nbsp;免费试用				</div>				<div class=\"youxian\">				</div>				<div class=\"more\">					更多 >				</div>			</div>			<div class=\"nav222\">				<div class=\"nav1\">					<b>最新</b>					<i class=\"iconfont\">&#xe630;</i>				</div>				<div class=\"nav2\">					<b>价值</b>					<i class=\"iconfont\">&#xe630;</i>				</div>				<div class=\"nav3\">					<b>剩余份数</b>					<i class=\"iconfont\">&#xe630;</i>				</div>				<div class=\"nav4\">					<i class=\"iconfont\">&#xe61a;</i>					<b>全部</b>				</div>			</div>			<ul class=\"shouyebox\">				<!--<li><img src=\"http://www.lingla.com/upload/ShopIssue/20150422/5eb070d3-31ed-414a-bd5b-012f740ea3bb.jpg\"/>			<p>iPad mini3 金色 16GB 【手机端申请优先】</p>			<i>￥2888.00</i>&nbsp;<span>免费</span>&nbsp;&nbsp;<b>限量2份</b>			</li>-->				<li>					<script id=\"test0\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test1\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test2\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test3\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test4\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test5\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test6\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test7\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test8\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test9\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test10\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test11\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test12\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test13\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test14\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test15\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test16\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test17\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test18\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>				<li>					<script id=\"test19\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>																<li>					<script id=\"test20\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test21\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test22\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test23\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test24\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test25\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test26\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test27\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test28\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li><li>					<script id=\"test29\" type=\"text/html\">						{{each src as value i}}						<img src={{value}}>						<p>{{name}}</p>						{{#price[i]}} {{/each}}					</script>				</li>			</ul>		</div>	</div></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe62e;</i>            <b>首页</b>        </li>        <li data-url=\"/build/search.html\">            <i class=\"iconfont\">&#xe610;</i>            <b>试用</b>        </li>        <li>            <i class=\"iconfont\">&#xe60c;</i>            <b>邀请好友</b>        </li>        <li>            <i class=\"iconfont\">&#xe614;</i>            <b>任务</b>        </li>        <li>            <i class=\"iconfont\">&#xe60c;</i>            <b>我的领啦</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  append: function ($el, str) {
	    $el.append(str);
	  },

	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ },
/* 6 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/*module.exports = function (options) {
	  var defaultOpions = {
	    id: '#index-scroll'
	  };

	  var opt = $.extend({}, defaultOpions, options);

	  var myScroll = opt.myScroll;

	  myScroll.scrollBy(0, -35);

	  var $scroll = $(opt.id);
	  var head = $scroll.find('.head img'),
	  topImgHasClass = head.hasClass('up');
	  var foot = $scroll.find('.foot img'),
	  bottomImgHasClass = head.hasClass('down');

	  myScroll.on('scroll', function () {
	    var y = this.y,
	    maxY = this.maxScrollY - y;
	    if (y >= 0) {
	      !topImgHasClass && head.addClass('up');
	      return '';
	    }
	    if (maxY >= 0) {
	      !bottomImgHasClass && foot.addClass('down');
	      return '';
	    }
	  });

	  myScroll.on('scrollEnd', function () {
	    if (this.y >= -35 && this.y < 0) {
	      myScroll.scrollTo(0, -35);
	      head.removeClass('up');
	    } else if (this.y >= 0) {
	      head.attr('src', '/build/images/ajax-loader.gif');
	      // ajax下拉刷新数据
	      opt.refreshAjax();
	    }

	    var maxY = this.maxScrollY - this.y;
	    var self = this;
	    if (maxY > -35 && maxY < 0) {
	      myScroll.scrollTo(0, self.maxScrollY + 35);
	      foot.removeClass('down')
	    } else if (maxY >= 0) {
	      foot.attr('src', '/build/images/ajax-loader.gif');
	      //TODO ajax上拉加载数据
	      opt.moreAjax();
	    }
	  });}
	*/


/***/ }
/******/ ]);