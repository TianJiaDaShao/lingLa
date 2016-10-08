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

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li class=\"active\" data-url=\"/prd/index.html\">            <i class=\"iconfont\">&#xe62e;</i>            <b>首页</b>        </li>        <li data-url=\"/prd/try.html\">            <i class=\"iconfont\">&#xe610;</i>            <b>试用</b>        </li>        <li data-url=\"/prd/invite.html\">            <i class=\"iconfont\">&#xe60c;</i>            <b>邀请好友</b>        </li>        <li data-url=\"/prd/try.html\">            <i class=\"iconfont\">&#xe614;</i>            <b>任务</b>        </li>        <li data-url=\"/prd/mine.html\" >            <i class=\"iconfont\">&#xe60c;</i>            <b>我的领啦</b>        </li>    </ul></footer>"

/***/ },
/* 5 */,
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	module.exports = function (options) {
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



/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/29.
	 */
	__webpack_require__(18);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(19);
	var footer = __webpack_require__(4);

	var common = __webpack_require__(6);
	var iscrollUtil = __webpack_require__(7);

	common.renderBody($('body'), str);
	common.append($('.container'), footer);
	common.switchPage(3);


	$.ajax({
	  url: '/api/task.php',
	  success: function (res) {
	    var strScrollTop = '<div><div class="head"> \
	        <img src="/images/arrow.png"/> \
	        <span>下拉刷新...</span> \
	    </div>';

	    var strScrollBottom = '<div class="foot"> \
	        <img src="/images/arrow.png"/> \
	        <span>上拉加载更多...</span> \
	    </div></div>';

	    var html = template('list', res);

	    html = strScrollTop + html + strScrollBottom;

	    common.inner($('#index-scroll'), html);
	  }
	});


	window.onload = function () {
	  var id = '#index-scroll';
	  var head = $(id).find('.head img');
	  var foot = $(id).find('.foot img');

	  var myScroll = new IScroll(id, {
	    probeType: 3,
	    mouseWheel: true
	  });

	  var refreshAjax = function () {
	    $.ajax({
	      url: '/api/taskRefresh.php',
	      success: function (res) {
	        debugger;
	        var html = template('list', res);
	        var lis = $(html).unwrap().html();
	        $(id).find('ul').prepend(lis);
	        myScroll.scrollTo(0, -35);
	        head.removeClass('up');
	        head.attr('src', '/images/arrow.png');
	        myScroll.refresh();
	      }
	    });
	  };

	  var moreAjax = function () {
	    $.ajax({
	      url: '/api/taskMore.php',
	      success: function (res) {
	        var html = template('list', res);
	        var lis = $(html).unwrap().html();
	        $(id).find('ul').append(lis);

	        myScroll.scrollTo(0, self.y + 35);
	        foot.removeClass('down');
	        foot.attr('src', '/images/arrow.png');
	        myScroll.refresh();
	      }
	    });
	  };

	  iscrollUtil({
	    myScroll: myScroll,
	    refreshAjax: refreshAjax,
	    moreAjax: moreAjax
	  });
	};



/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>        <ul>            <li>                <span>规则</span>            </li>            <li>                <span class=\"active\">转发任务</span>                <span>有奖邀请</span>            </li>            <li><a class=\"iconfont\" href=\"javascript:location=location\">&#xe604;</a></li>        </ul>    </header>    <section>      <div class=\"swiper-container\" id=\"index-swiper\">        <section id=\"index-scroll\">          <script id=\"list\" type=\"text/html\">          <ul>            {{each data as value i}}            <li>              <span id=\"spanbox\">                <h3 id=\"time\">{{value.time}}</h3>                <em><i><img src={{value.img}} alt=\"\"><h2 id=\"title\">{{value.title}}</h2><span class=\"name\">{{value.name}}</span><a class=\"iconfont\" href=\"javascript:;\">&#xe632;</a></i></em>                <b><span id=\"toTask\">{{value.toTask}}</span><span id=\"rest\">{{value.rest}}</span><span id=\"relay\">{{value.relay}}</span><i class=\"iconfont\">{{value.circle}}</i></b>              </span>            </li>            {{/each}}          </ul>          </script>        </section>      </div>    </section></div>"

/***/ }
/******/ ]);