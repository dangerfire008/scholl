$(document).ready(function() {
	$('#scro').on('click', 'a', function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1200);
	});
});

$(document).ready(function() {
	$('#scro2').on('click', 'a', function(event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		    top = $(id).offset().top;
		$('body, html').animate({ scrollTop: top }, 1500);
	});
});