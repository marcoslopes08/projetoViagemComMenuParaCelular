/* jQuery que faz o Botão Voltar ao Topo aparecer/desaparecer durante a rolagem na página */
jQuery(document).ready(function() {
	
	var offset = 300;
	var duration = 500;

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.btn').fadeIn(duration);
		} else {
			jQuery('.btn').fadeOut(duration);
		}
	});
		
	jQuery('.btn').click(function(event) {
		event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
	});
});

