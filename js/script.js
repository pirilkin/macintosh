$(document).ready(function () {
    
    // $('.numbers-digit').each(function () {
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 1000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

    
// $(document).ready(function(){
  $('.testimonials-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    initialSlide:1,
  });
  // });;
    $('.header-nav__item a').click(function (e) {
    // e.preventDefault();

    $('.header-nav__item a').removeClass('active');

    $(this).addClass('active');
    var id = $(this).attr('href');
    var pos = $(id).offset().top;
    $('html').animate({
        scrollTop:pos
    },500)

})
;
    $('.burger').click(function () {
    $('.header-nav__items').toggleClass('open');
    // $('.open-relative').toggleClass('open-relative');
    if ($('.header-nav__items').hasClass('open')) {
        $('.header-nav__items').animate({
            top: 75,
            right: 10,
        }, 600)

        $('.burger').siblings('.burger i').animate({
            // transform: rotate(90),
        //             // right: 10,
        }, 600)
        // $(this).siblings('.burger').attr('class', 'pe-7s-close-circle pe-2x');
        // $('.header-popup').removeClass('open');
        // $burg = $('.header-nav__list').siblings('.burger');
        // ($burg).attr('class', 'pe-7s-close-circle pe-2x');
        // $('.header-popup').removeClass('open');
    }
    else {
        $('.header-nav__items').animate({
            top: 75,
            right: -350,
        }, 600)
        // $('.header-popup').removeClass('open');
        //     $(this).siblings('.burger').attr('class', 'pe-7s-plus pe-2x');
    }
});
    $('.work-link__item').click(function(e){
    e.preventDefault();
    $('.additionally').toggleClass('additionally-add');
   if ($('.additionally').hasClass('additionally-add')){
    $(this).text('well that\'s enough pictures - close it!!!');
   }
   else{
    $(this).text('load more work');
   }
});;
    
    $('.numbers-digit').counterUp({
        time: 4000
    });


});