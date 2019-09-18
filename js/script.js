$(function() {
	// Load header.html, footer.html, menu.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('#sidebar').load('sidebar.html');
	
	// Back to Top
	$(window).scroll(function() {
    	if ($(this).scrollTop() >= 50) {        
        	$('#return-to-top').fadeIn(200);    
    	} else {
        		$('#return-to-top').fadeOut(200); 
    		}
	});

	$('#return-to-top').click(function() {      
    	$('body,html').animate({scrollTop : 0}, 700);
	});
});