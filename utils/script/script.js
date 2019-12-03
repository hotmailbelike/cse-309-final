$('form').submit(function(e) {
	e.preventDefault();
	var reviewer_name = $('#name').val(),
		rating = $('#rating').val(),
		comment = $('#comment').val();

	var param = { reviewer_name, rating, comment };
	param = JSON.stringify(param);

	let href = '/review/' + param;

	// $(this)[0].reset();

	window.location.href = href;
	// console.log(reviewer_name, rating, comment);
});
