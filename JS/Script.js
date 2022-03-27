// menu
let mainMenu = $('.custom_nav').offset().top;

$(window).scroll(function(){
    let ScrollWin = $(window).scrollTop();
    if(ScrollWin> mainMenu){
        $('.custom_nav').addClass('menu_fixed');
    }else{
        $('.custom_nav').removeClass('menu_fixed');
    }
//scroll
     if(ScrollWin > 200){
        $('.scroll').fadeIn(1000);
    }else{
        $('.scroll').fadeOut(1000);
    }
});

//scroll
    $('.scroll').on("click",function(){
        $('body,html').animate({
        scrollTop: 0
    },500);
    });
    
$(function($){
//banner js
    $('#banner').slick({
        prevArrow: '<i class="fa-solid banner_arrow_left fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid banner_arrow_right fa-angle-right"></i>',
    });

// my work js
    new VenoBox({
        selector: ".mywork",
        spinner: "wander"
    });

    $('.filter-container').filterizr();

    $('.filter_menu ul li').on('click', function(){
        $('.filter_menu ul li').removeClass('active');
        $(this).addClass('active');
    });

//Wow js
    new WOW().init();

});