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
    
    //Sort - Sort cái table đang được show ngoài HTML
    $('th').on('click', function() {
                let column = $('th').index(this); //trả về số thứ tự khi click vào thẻ th
                let order = $(this).data('sort'); //lấy value trong data html
                let rows = $('tbody tr').toArray(); //lấy các <tr> hiện tại lưu vào 1 mảng

                if ($(this).is('.ascending') || $(this).is('.descending')) {
                    $(this).toggleClass('ascending descending');
                    $('tbody').append(rows.reverse());
                } else {
                    $(this).siblings().attr('class', 'normal'); //Khi sort sang <th> khác thì các <th> còn lại về normal
                    $(this).attr('class', 'ascending');

                    rows.sort(function(a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        return compare[order](a,b);
                    });
                    //không cần $('tbody').empty()
                    $('tbody').append(rows);
                }
            });

});