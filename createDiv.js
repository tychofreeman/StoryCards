var id = 0;

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

$(document).ready($('#cardCreator').mousedown(function(e) {
		id = S4();
		var title = $('#templateTitle').val();
		var desc = $('#templateDesc').val();
		var div = makeCardDiv(e.pageX, e.pageY, id, title, desc);
		$(div).appendTo('body');
		// send the div delta back to base
	}
));

function makeCardDiv(x, y, id, title, desc) {
	return "<div id='" + id + "' class='card' style='top:" + y + ";left:" + x + ";'>"
		+ "<div class='title'>" + title + "</div>"
		+ "<hr/>"
		+ "<div class='desc'>" + desc + "</div>"
		+ "</div>";
}
