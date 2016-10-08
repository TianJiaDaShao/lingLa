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

	module.exports = __webpack_require__(11);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/29.
	 */
	__webpack_require__(12);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(13);

	var common = __webpack_require__(6);
	var iscrollUtil = __webpack_require__(7);

	common.renderBody($('body'), str);



/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>    <ul>            <li></li>            <li>                <span class=\"trial\">转发任务</span>                <span class=\"active forthe\">有奖邀请</span>            </li>            <li>                我的邀请<img src=\"images/yaoqjtz.jpg\"/>            </li>        </ul>    </header>    <section>        <div class=\"banner\">            <img src=\"images/banner.png\" alt=\"\">            <h2>领啦网累计已发放奖励 <em>224583</em> 元</h2>        </div>        <div class=\"qin\">            <img src=\"images/banner_l.png\" alt=\"\" />            <ul>                <li>亲，您目前不满足邀请要求，完成以下任务<br />就可以参与邀请了哦！</li>                <li>参加邀请好友条件：</li>                <li>                    1、完成活动金额大于200元                    <img src=\"images/cax.jpg\" /><a href=\"#\"\">[ 去做活动 ]</a>                </li>                <li>                    2、绑定手机号                    <img src=\"images/cax.jpg\" /><a href=\"#\">[ 立即绑定 ]</a>                </li>            </ul>        </div>        <div class=\"jiangl\">            <img src=\"images/jiangl.png\" alt=\"\">        </div>        <div class=\"tuan\">            <div class=\"tuanbox\">            <img src=\"images/tuan.png\" alt=\"\">            </div>        </div>        <div class=\"ceng\">            <img src=\"images/ceng.png\" alt=\"\">        </div>        <div class=\"case\">            <p>                作为团队的组织者，您邀请的用户继续邀请其他用户成功参与，您将额外 获得最高3个层级的现金奖励 。举个栗(例)子：您邀请了A，您获得<em>8元现金奖励</em>；A邀请了B 您可以获得<em>3元现金奖励</em>；B邀请了C您可以获得<em>1元现金奖励</em>；这些团队成员将源源不断的为您赢取现金奖励。<br/>                <span>* 奖励即时到账（直接发放到您的账户余额）邀请好友无上限</span>            </p>        </div>        <div class=\"other\">        <div class=\"otherbox\">            <img src=\"images/gui.png\" alt=\"\">            <ol>                <li>邀请好友注册成功，邀请者获得100金币奖励；</li>                <li>                    被邀请者完成申请3个免费试用，邀请者再获得100金币 奖励；                </li>                <li>邀请成功后，被邀请者获得200金币奖励；</li>                <li>                    邀请的小伙伴必须是新用户，若通过反作弊系统检测出有作弊行为的， 将取消奖励并且永久封号；                </li>                <li>                    邀请方式可以通过微信、QQ、QQ空间、微博、论坛发帖等其他方式 发给好友。                </li>            </ol>        </div>        </div>    </section></div>"

/***/ }
/******/ ]);