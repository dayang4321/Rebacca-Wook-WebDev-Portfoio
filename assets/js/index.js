
//initialize wow.js
$( document ).ready(function() {
    new WOW().init();
});
  

//dispose preloader
window.onload = (event) => {
    $('#loading').addClass('animated fadeOut fast');
    $('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        document.getElementById("loading").style.display = "none" )

}

//navbar expanded class toggle
$('.navbar-toggler').click(function () {
    $('#home-navbar').toggleClass('nav-expanded');
    $('#home-navbar').hasClass('nav-expanded') ? $('#brand-image').attr('src', 'assets/img/logo/RW-Logo-mobile.svg') : $('#brand-image').attr('src', 'assets/img/logo/RW Logo.svg');

})

//simulate nav button click on screen expand
$(window).resize(function () {
    if (($(window).width() > 767) &&  ($('#home-navbar').hasClass('nav-expanded'))) {
        $('#brand-image').attr('src', 'assets/img/logo/RW Logo.svg');
        $('.navbar-toggler').click();
    }
       }
)

//run functions on scroll position
 $(window).scroll(function() {
    var hT = $('#stats-row').offset().top,
        hH = $('#stats-row').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
  
        if ($('#stats-row').hasClass('counter-ran')) {
            return
        }
        else {
         
            $('#stats-row').addClass('counter-ran');
            $('.stat').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
        ;
    }
 });
 $(window).scroll(function() {
    var hT = $('#skills-block').offset().top,
        hH = $('#skills-block').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        // console.log('H1 on the view!');
        if ($('.skill-progress').hasClass('progress-animate')) {
            return
        }
        else {
            // console.log('counter on the view!');
            $('.skill-progress').addClass('progress-animate');
           
        }
        ;
    }
 });


