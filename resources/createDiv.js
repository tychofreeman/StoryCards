var id = 0;

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

$(document).ready($('#cardCreator').click(function(e) {
		id = S4();
		var idSelector = '#' + id;
		var title = $('#templateTitle').val();
		var desc = $('#templateDesc').val();
		var div = makeCardDiv(0, 300, id, title, desc);
		$(div).appendTo('body');
		$('.card').draggable({
			containment: 'parent',
			create: function(event, ui) {
				$('<div>Created by...</div>').appendTo(event.target)
			},
			drag:   function(event, ui) {
			},
			start:  function(event, ui) {
				//alert("Starting to drag...");
				$(event.target).addClass('movingCard');
			},
			stop:   function(event, ui) {
				$(event.target).removeClass('movingCard');
			}
		});
		$(idSelector + '>div.deleteBox').mousedown(function(e) {
			$(idSelector).remove();
		});
		// send the div delta back to base
	}
));



function makeCardDiv(x, y, id, title, desc) {
	return "<div id='" + id + "' class='card ui-draggable' style='top:" + y + ";left:" + x + ";'>"
		+ "<div class='deleteBox'></div>"
		+ "<div class='title'>" + title + "</div>"
		+ "<hr/>"
		+ "<div class='desc'>" + desc + "</div>"
		+ "</div>";
}
