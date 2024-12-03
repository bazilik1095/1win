$(function () {
	
    /* preloader */

    $(window).on('load', function () {
        $(".preloader").fadeOut();
    });

    $(document).ready(function(){
        $('.language .head').click(function() {
          $(this).closest('.language').find('ul').stop().slideToggle();
        });
    });

    $('#mobile-menu').click(function () {
        $('.main-navigation').toggleClass('active');
    });

});

