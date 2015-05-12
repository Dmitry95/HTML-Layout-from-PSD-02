$(document).ready(function(){
    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
		
        // scroll body to 0px on click
        $('#back-top').click(function () {
			$('#back-top').fadeOut();
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});