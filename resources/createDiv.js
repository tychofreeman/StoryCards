
function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

var socket;

$(document).ready(function() {
	socket = new io.Socket('localhost');
	socket.connect();
	socket.on('connect', function() {
		console.log('connected...');
	});
	
	socket.on('message', function(data) {
		console.log('data: ' + data);
	});

	socket.send('hi there!!');
});

$(document).ready($('#cardCreator').click(function(e) {
		var id = S4();
		var title = $('#templateTitle').val();
		var desc = $('#templateDesc').val();
		var xPos = 0;
		var yPos = 300;
		
		addCard(xPos, yPos, id, title, desc);
		// send the div delta back to base
	}
));

$(document).ready(function(){
	$.getJSON("CardService/list", {}, function(data, textStatus, jqHXR) {
		$.each(data, function(k, v) {
			addCard(v.X, v.Y, v.Id, v.Title, v.Desc);
			console.log("Found card id=" + k + ": " + v);
		});
	}).error(function(err) {
		console.log("Error: " + err);
	});
});

function addCard(xPos, yPos, id, title, desc) {
	var div = makeCardDiv(xPos, yPos, id, title, desc);
	$(div).appendTo('body');
	$('.card').draggable({
		containment: 'parent',
		create: function(event, ui) {
			$.post("CardService/create", { id: id, title: title, desc: desc, x: xPos, y: yPos });
		},
		drag:   function(event, ui) {
			$.post("CardService/move", { id: event.target.id, x: event.target.offsetLeft, y: event.target.offsetTop });
			socket.send('moving card...');
		},
		start:  function(event, ui) {
			//alert("Starting to drag...");
			$(event.target).addClass('movingCard');
		},
		stop:   function(event, ui) {
			$(event.target).removeClass('movingCard');
		}
	});
	var idSelector = '#' + id;
	$(idSelector + '>div.deleteBox').mousedown(function(e) {
		$.get("CardService/remove", { id: id });
		$(idSelector).remove();
	});
}

function makeCardDiv(x, y, id, title, desc) {
	return "<div id='" + id + "' class='card ui-draggable' style='top:" + y + ";left:" + x + ";'>"
		+ "<div class='deleteBox'></div>"
		+ "<div class='title'>" + title + "</div>"
		+ "<hr/>"
		+ "<div class='desc'>" + desc + "</div>"
		+ "</div>";
}
