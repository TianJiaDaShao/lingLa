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

	module.exports = __webpack_require__(14);


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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/9/29.
	 */
	__webpack_require__(15);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	/**
	 * Created by Administrator on 2016/10/8.
	 */
	var str=__webpack_require__(16);
	var footer = __webpack_require__(4);
	var common = __webpack_require__(6);

	common.renderBody($('body'), str);
	common.append($('body'), footer);
	common.switchPage(4);



/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\"><header>    <div><i class=\"iconfont\">&#xe605;</i></div>    未登录</header><div class=\"login\">    <p><i class=\"iconfont\">&#xe64c;</i><span class=\"first\">用户名/手机号登录<e>&gt</e></span></p>    <p><i class=\"iconfont\">&#xe604;</i><span>QQ账号安全登录<e>&gt</e></span></p></div><div class=\"register\"><p><i class=\"iconfont\">&#xe605;</i><span>快速注册<e>&gt</e></span></p></div></div>"

/***/ }
/******/ ]);