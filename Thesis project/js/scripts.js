var images = document.querySelectorAll('.accordion-image');

for (var i = 0; i < images.length; i++) {
	var image = images[i];

	(function(index) {
		image.addEventListener('mouseover', function (e) {
			showText(index);
		}); 	
	}(i))
}

function showText(index) {
	var texts = document.querySelectorAll('.texts p');
	var text = document.querySelector('.texts .text' + (index + 1));

	for (var k = 0; k < texts.length; k++) {
		texts[k].classList.remove('showed');
	}

	text.classList.add('showed');	
}

document.querySelector('.accordion').addEventListener('mouseleave', function(e) {
	showText(1);
});

showText(1);