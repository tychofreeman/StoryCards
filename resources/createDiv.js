
function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

$(document).ready($('#cardCreator').click(function(e) {
		var id = S4();
		var idSelector = '#' + id;
		var title = $('#templateTitle').val();
		var desc = $('#templateDesc').val();
		var xPos = 0;
		var yPos = 300;
		var div = makeCardDiv(xPos, yPos, id, title, desc);
		$(div).appendTo('body');
		$('.card').draggable({
			containment: 'parent',
			create: function(event, ui) {
				$.post("CardService/create", { id: id, title: title, desc: desc, x: xPos, y: yPos });
			},
			drag:   function(event, ui) {
				$.post("CardService/move", { id: id, x: event.pageX, y: event.pageY });
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
			$.get("CardService/remove", { id: id });
			$(idSelector).remove();
		});
		// send the div delta back to base
	}
));

$(document).ready(function(){
	$.get("CardService/list", {}, function(data) {
		console.log(data);
	});
});



function makeCardDiv(x, y, id, title, desc) {
	return "<div id='" + id + "' class='card ui-draggable' style='top:" + y + ";left:" + x + ";'>"
		+ "<div class='deleteBox'></div>"
		+ "<div class='title'>" + title + "</div>"
		+ "<hr/>"
		+ "<div class='desc'>" + desc + "</div>"
		+ "</div>";
}
