var id = 0;

function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

$(document).ready($('#theBody').mousedown(function(e) {
		id = S4();
		var div = makeCardDiv(e.pageX, e.pageY, id);
		$(div).appendTo('#theDiv');
		// send the div delta back to base
	}
));

$(document).ready($('html').keypress(function(e) {
		var idSelector = "#" + id;
		var currText = $(idSelector).text();
		$(idSelector).text(currText + String.fromCharCode(e.which));
		// send the div delta back to base...
	}
));

var socket = new WebSocket('ws://localhost:8989/socket');
socket.onopen=function() {
	socket.send("hello");
}
socket.onmessage=function(msg) {
	alert('got reply ' + msg);
}


function makeCardDiv(x, y, id) {
	return "<div id='" + id + "' class='card' style='top:" + y + ";left:" + x + ";'></div>";
}
