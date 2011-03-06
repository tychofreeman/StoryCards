describe("Moving Cards", function() {
  before(function() {
	$(makeCardDiv(15, 15, 'abcdefg', 'title', 'desc')).appendTo('body');
  });
  after(function() {
	$('#abcdefg').remove();
  });

  it("should change the position to match the inputs", function() {
	var card = $('#abcdefg');
	moveCard(19, 33, card);
	assert(card.position().top).should(eql, 33);
	assert(card.position().left).should(eql, 19);
  });
});
