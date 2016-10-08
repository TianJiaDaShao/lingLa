
var str = require('../tpls/index.string');
var footer = require('../tpls/footer.string');
var common = require('../utils/common.util.js');
var iscrollUtil = require('../utils/iscroll.util.js');

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
};
