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

	__webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);
	var footer = __webpack_require__(4);
	var apl = __webpack_require__(5);


	var common = __webpack_require__(6);
	var iscrollUtil = __webpack_require__(7);

	common.renderBody($('body'), str);
	common.append($('.container'), footer);
	common.switchPage(0);


	//试用详情申请用户切换
	$('header span').on('tap', function() {
	    $(this).addClass('active').siblings().removeClass('active');
	});


	$('.forthe').on('tap',function(){
	       $('.shiy1').css('display', 'none');
	       $('.applic').css('display', 'block');

	});
	$('.trial').on('tap',function(){
	       $('.shiy1').css('display', 'block');
	       $('.applic').css('display', 'none');
	});

	$.ajax({
	  url: '/api/applicant.php',
	  success: function (res) {
	      var html = template('list', res);
	          common.inner($('.applic'), html);
	        }
	      });





	//免费申请
	$('.freeapply').on('tap', function() {
	    $('.black').css('display', 'block');
	    $('.bdtb').css('display', 'block');
	    $('.zbbd').on('tap', function() {
	        $('.black').css('display', 'none');
	        $('.bdtb').css('display', 'none');
	        $('.zbbdh').css('display', 'block');
	        var t = setTimeout(function() {
	            $('.zbbdh').css('display', 'none')
	        }, 1000);
	    });
	});


	//swiper初始化
	// var mySwiper = new Swiper('.swiper-container', {
	//     // autoplay: 5000,
	// });









	//



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\"><header>    <ul>        <li class=\"iconfont\"><img src=\"images/arrowleft.png\" alt=\"\"/></li>        <li>            <span class=\"active trial\">试用详情</span>            <span class=\"forthe\">申请用户</span>        </li>        <li>            有奖分享        </li>    </ul></header><section><div class=\"swiper-container\" id=\"detail-swiper\">        <div class=\"swiper-wrapper\">        <div class=\"swiper-slide\">                    <section id=\"index-scroll\">                    <div class=\"shiy1\">                    <div class=\"picture\">                        <img src=\"images/torch.png\" alt=\"\"/>                        <div class=\"desc\">                            <div class=\"name\">                                送强光手电筒四季智版                            </div>                            <div class=\"descbot\">                                <div class=\"price\">                                    ￥100.00 剩余<span>20</span>/20份                                </div>                                <div class=\"descpic stpsp\">                                    送图片商品                                </div>                                <div class=\"descpic baoy\">                                    包邮                                </div>                                <div class=\"descpic taob\">                                    淘宝                                </div>                            </div>                        </div>                    </div>                    <div class=\"deposit\">                        <img class=\"bao\" src=\"images/bao.jpg\"/>商家已存担保金￥2040.00                    </div>                    <div class=\"path\">                        <p class=\"syong\">                            试用流程                        </p>                        <p>                            1、申请试用，获得试用资格                        </p>                        <p>                            2、按照提示以<span>100.00</span> 元去指定平台购买                        </p>                        <p>                            3、回领啦填写购买付款的订单号                        </p>                        <p>                            4、确认收货 → 给予评价，填写试用报告                        </p>                        <p class=\"fanh\">                            5、系统返还 <span>101.00</span>                            元到您的领啦账户中                        </p>                    </div>                    <div class=\"attention\">                        <p class=\"zysx\">                            注意事项                        </p>                        <p>                            1、与商家旺旺聊天时不要提及“领啦、试客、领啦试客”等信息，否则试用无效。                        </p>                        <p>                            2、禁止使用信用卡、淘金币、优惠券、红包、天猫积分等。                        </p>                        <p>                            3、禁止通过淘宝客、返利网、一淘等返现返利网链接下单。                        </p>                    </div>                    <div class=\"tip\">                        <p class=\"wxts\">                            温馨提示                        </p>                        <p>                            1、用户获得试用资格后，请根据时间提示按时提交订单号和试用报告。                        </p>                        <p>                            2、若因未按时提交以上信息而被系统取消试用资格，用户可在“未通过试用”中选择恢复资格。                        </p>                        <p>                            3、若活动已无剩余资格，将无法恢复资格，由此造成的损失需由买家承担。                        </p>                    </div>                    </div>                    <div class=\"swiper-slide applic\">                    <script id=\"list\" type=\"text/html\">                        <ul>                            {{each data as value i}}                                <li><span><i><img src={{value.img}} alt=\"\"></i><b>{{value.title}}</b></span></li>                            {{/each}}                        </ul>                	 </script>                    </div>                    </section >                </div>        </div>    </div></section><footer>            <div class=\"freeapply\">                免费申请            </div>            <div class=\"gold\">金币份数已兑完</div></footer><div class=\"bdtb\">    <p>绑定淘宝</p>    <input type=\"text\">    <div class=\"bdbtn\">        <div class=\"zbbd\">            暂不绑定        </div>        <div class=\"bd\">绑定</div>    </div></div><div class=\"zbbdh\">亲，绑定手机号才能申请哦</div><div class=\"black\"></div></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li class=\"active\" data-url=\"/prd/index.html\">            <i class=\"iconfont\">&#xe62e;</i>            <b>首页</b>        </li>        <li data-url=\"/prd/try.html\">            <i class=\"iconfont\">&#xe610;</i>            <b>试用</b>        </li>        <li data-url=\"/prd/invite.html\">            <i class=\"iconfont\">&#xe60c;</i>            <b>邀请好友</b>        </li>        <li data-url=\"/prd/try.html\">            <i class=\"iconfont\">&#xe614;</i>            <b>任务</b>        </li>        <li data-url=\"/prd/mine.html\" >            <i class=\"iconfont\">&#xe60c;</i>            <b>我的领啦</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\"><header>    <ul>        <li class=\"iconfont\"><img src=\"images/arrowleft.png\" alt=\"\"/></li>        <li>            <span class=\"trial\">试用详情</span>            <span class=\"active forthe\">申请用户</span>        </li>        <li>            有奖分享        </li>    </ul></header><section><div class=\"picture\">    <img src=\"images/torch.png\" alt=\"\"/>    <div class=\"desc\">        <div class=\"name\">            送强光手电筒四季智版        </div>        <div class=\"descbot\">            <div class=\"price\">                ￥100.00 剩余<span>20</span>/20份            </div>            <div class=\"descpic stpsp\">                送图片商品            </div>            <div class=\"descpic baoy\">                包邮            </div>            <div class=\"descpic taob\">                淘宝            </div>        </div>    </div></div><div class=\"deposit\">    <img class=\"bao\" src=\"images/bao.jpg\"/>商家已存担保金￥2040.00</div><div class=\"path\">    <p class=\"syong\">        试用流程    </p>    <p>        1、申请试用，获得试用资格    </p>    <p>        2、按照提示以<span>100.00</span> 元去指定平台购买    </p>    <p>        3、回领啦填写购买付款的订单号    </p>    <p>        4、确认收货 → 给予评价，填写试用报告    </p>    <p class=\"fanh\">        5、系统返还 <span>101.00</span>        元到您的领啦账户中    </p></div><div class=\"attention\">    <p class=\"zysx\">        注意事项    </p>    <p>        1、与商家旺旺聊天时不要提及“领啦、试客、领啦试客”等信息，否则试用无效。    </p>    <p>        2、禁止使用信用卡、淘金币、优惠券、红包、天猫积分等。    </p>    <p>        3、禁止通过淘宝客、返利网、一淘等返现返利网链接下单。    </p></div><div class=\"tip\">    <p class=\"wxts\">        温馨提示    </p>    <p>        1、用户获得试用资格后，请根据时间提示按时提交订单号和试用报告。    </p>    <p>        2、若因未按时提交以上信息而被系统取消试用资格，用户可在“未通过试用”中选择恢复资格。    </p>    <p>        3、若活动已无剩余资格，将无法恢复资格，由此造成的损失需由买家承担。    </p></div></section></div>"

/***/ },
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



/***/ }
/******/ ]);