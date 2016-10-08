var str = require('../tpls/detail.string');
var footer = require('../tpls/footer.string');
var apl = require('../tpls/applicant.string');


var common = require('../utils/common.util.js');
var iscrollUtil = require('../utils/iscroll.util.js');

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
