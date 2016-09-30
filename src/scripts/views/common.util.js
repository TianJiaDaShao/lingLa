/**
 * Created by Administrator on 2016/9/30.
 */
var common={
    inner:function ($el,str) {
        $el.html(str);
    },
    append:function ($el,str) {
        $el.append(str);
    }
};

module.exports=common;