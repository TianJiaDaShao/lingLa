var str = require('../tpls/task.string');
var footer = require('../tpls/footer.string');

var common = require('../utils/common.util.js');
var iscrollUtil = require('../utils/iscroll.util.js');

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
