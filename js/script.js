
$(function() {
	// Load header.html, footer.html, menu.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('#sidebar').load('sidebar.html');
	
	// Back to Top
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
    	var scrollTop = $(window).scrollTop();
    	if (scrollTop > scrollTrigger) {
    		$('#back-to-top').addClass('show');
    	} else {
    		$('#back-to-top').removeClass('show');
    	}
    };
    backToTop();
    $(window).on('scroll', function () {
    	backToTop();
    });
    $('#back-to-top').on('click', function (event) {
    	event.preventDefault();
    	$('html,body').animate({
    		scrollTop: 0
    	}, 700);
    });
	}
    // Load See More
    let defaultHeight = 0;
    let text = $(".text");
    let textHeight = text[0].scrollHeight;
    let button = $(".button");
    button.text('Xem thêm');
    text.css({"max-height": defaultHeight, "overflow": "hidden"});

    button.on("click", function(){
      let newHeight = 0;
      if (text.hasClass("active")) {
        newHeight = defaultHeight;
        text.removeClass("active");
        button.text('Xem thêm');
    } else {
        newHeight = textHeight;
        text.addClass("active");
        button.text('Thu gọn');
    }
    text.animate({
        "max-height": newHeight
    }, 500);
    console.log(newHeight);
});
   
});