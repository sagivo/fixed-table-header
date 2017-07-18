(function($){
    $.fn.fixedTableHeader = function () {
	    var t = $(this);
	    var tableOffset = t.offset().top;
	    var fixed_table = $('<table></table>').css({ 'display':'none', 'position':'fixed', 'top':'0px', 'background-color':'white' });
	    t.parent().append(fixed_table.append(t.find("thead").clone()));
		
		fixed_table.attr("border",t.attr("border"));
		fixed_table.css("border-collapse",t.css("border-collapse"));
		fixed_table.attr("cellspacing",t.attr("cellspacing"));

		fixed_table.width(t.outerWidth());
		
		if(t.css("border-collapse")=="collapse"){
			var borderWith = parseInt(t.css("border"));
		}else{
			var borderWith = 0;
		}
	    fixed_table.find("th").each(function (i) {
	        $(this).width(t.find("th").eq(i).width() + borderWith);
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
