(function($){
	/**
	 * 表头悬浮插件
	 * @date 2017-07-18 13:17:54
	 */
    $.fn.fixedTableHeader = function () {
	    var t = $(this);
	    var tableOffset = t.offset().top;
	    // 创建一个表格，设置样式
	    var fixed_table = $('<table></table>').css({ 'display':'none', 'position':'fixed', 'top':'0px', 'background-color':'white' });
	   	// 把标题的标题clone过来
	    t.parent().append(fixed_table.append(t.find("thead").clone()));
		
		// 设置表格属性和样式
		fixed_table.attr("border",t.attr("border"));
		fixed_table.css("border-collapse",t.css("border-collapse"));
		fixed_table.attr("cellspacing",t.attr("cellspacing"));
		// 设置表格的宽度
		fixed_table.width(t.outerWidth());
		
		// 用于判断宽度该加多少
		if(t.css("border-collapse")=="collapse"){
			var borderWith = parseInt(t.attr("border"));
		}else{
			var borderWith = 0;
		}
		// 设置表格悬浮标题单元格的宽度
	    fixed_table.find("th").each(function (i) {
	    	var width = t.find("th").eq(i).css("width");
	        $(this).width(parseInt(width)+borderWith+"px");
	    });
	
	    $(window).bind("scroll", function () {
	        var offset = $(this).scrollTop();
	        if (offset >= tableOffset && fixed_table.is(":hidden")) {
	            fixed_table.show();
	        }
	        else if (offset < tableOffset) {
	            fixed_table.hide();
	        }
	    });
	    return t;
	}
}(jQuery));

