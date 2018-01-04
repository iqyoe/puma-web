$('#myCarousel').carousel({
    interval: 0
});

$(document).ready(function(){

    var showHeaderAt = 100;

    var win = $(window),
            body = $('body');

    // Show the fixed header only on larger screen devices

    if(win.width() > 600){

        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.

        win.on('scroll', function(e){

            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
                $('.header-user-menu').hide();
                $('#headlogo').show();
            }
            else {
                body.removeClass('fixed');
                $('.header-user-menu').show();
                $('#headlogo').hide();
            }
        });

    }

});

$(document).ready(function(){

    var userMenu = $('.header-user-dropdown .header-user-menu');

    userMenu.on('touchend', function(e){

        userMenu.addClass('show');

        e.preventDefault();
        e.stopPropagation();

    });

    // This code makes the user dropdown work on mobile devices

    $(document).on('touchend', function(e){

        // If the page is touched anywhere outside the user menu, close it
        userMenu.removeClass('show');

    });

});

$( document ).ready(function() {
   // $("[rel='tooltip']").tooltip();

    $('.event-list .thumbnail, .news .thumbnail').hover(
        function(){
            $(this).find('.caption-show').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption-show').slideUp(250); //.fadeOut(205)
        }
    );
});

//NEW script

$(document).ready(function(ev){
  $('.custom_carousel').on('slide.bs.carousel', function (evt) {
    $('.custom_carousel .controls li.active').removeClass('active');
    $('.custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
  })
});
