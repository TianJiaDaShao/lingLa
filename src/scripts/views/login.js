/**
 * Created by Administrator on 2016/10/8.
 */
var str=require('../tpls/mine-index.string');
var footer = require('../tpls/footer.string');
var common = require('../utils/common.util.js');

common.renderBody($('body'), str);
common.append($('body'), footer);
common.switchPage(4);
