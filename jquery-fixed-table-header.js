(function($){
	/**
	 * ��ͷ�������
	 * @date 2017-07-18 13:17:54
	 */
    $.fn.fixedTableHeader = function () {
	    var t = $(this);
	    var tableOffset = t.offset().top;
	    // ����һ�����������ʽ
	    var fixed_table = $('<table></table>').css({ 'display':'none', 'position':'fixed', 'top':'0px', 'background-color':'white' });
	   	// �ѱ���ı���clone����
	    t.parent().append(fixed_table.append(t.find("thead").clone()));
		
		// ���ñ�����Ժ���ʽ
		fixed_table.attr("border",t.attr("border"));
		fixed_table.css("border-collapse",t.css("border-collapse"));
		fixed_table.attr("cellspacing",t.attr("cellspacing"));
		// ���ñ��Ŀ��
		fixed_table.width(t.outerWidth());
		
		// �����жϿ�ȸüӶ���
		if(t.css("border-collapse")=="collapse"){
			var borderWith = parseInt(t.attr("border"));
		}else{
			var borderWith = 0;
		}
		// ���ñ���������ⵥԪ��Ŀ��
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

