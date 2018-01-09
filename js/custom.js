/*global $, window*/


$(function () {
   
    "use strict";
    
    // Adjust Header Height
    
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
    });

    // bx-slider 
    
    $('.bxSlider').bxSlider({
        pager: false,
        auto : true
    });
    
    // Start smooth scrool to navbar 
    
    $('.links li a').click(function () {
       
        $('html, body').animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
        
    });
    
    // Our auto slider code
    
    (function autoslider() {
        
        $('.slider-testim .active-slider').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                  
                    $(this).
                        removeClass('active-slider').next().addClass('active-slider').fadeIn();
                    autoslider();
                   
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active-slider');
                    $('.slider-testim div').eq(0).addClass('active-slider').fadeIn();
                    
                    autoslider();
                });
                
            }
            
        });
        
    }());
    
    // Triggr Mixit Up 

    $(function () {
    
    // trigger mixitup 
    
        $('#container').mixItUp();
    
    });
    // adjest shuffle links
    
    $('.our-products li').click(function () {
        
        $(this).addClass('active-product').siblings().removeClass('active-product');
        
    });
    
    // trigger mixitup
    
    $(function () {
        
        $("html").niceScroll({
            
            cursorcolor: "#1abc9c",
            cursorborder: "1px solid #1abc9c"
            
        });
    });
    
});

$(function () {
   
    "use strict";
   
    $(window).on('load', function () {

        $(".loading-overlay .loading").fadeOut(3000, function () {
            $(this).parent().fadeOut(3000, function () {
                $(this).remove();
            });
        });
    });
    
});