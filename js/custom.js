$(document).ready(function() {
    // slider reg form
    $("#top-slider").owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:1
            }
        }
    });

    // user slider
    $("#user-carousel").owlCarousel({
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        loop: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        nav: true,
        items : 5,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        margin: 10,
        responsive:{
            0:{
                items:3
            },
            480:{
                items:3
            },
            481:{
                items:5
            }
        }
    });

    //circle bar
    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percentage,
                    thickness: 18,
                    fill: {
                        color: '#ffa352'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text(String(stepValue.toFixed(2)).substr(2) + '%');
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);

    // UI slider
    $("#sld").slider({values:[350000,700000],
        min:0,
        max:1000000,
        range:true,
        step:1000,
        slide:function(event,ui){
            $("#range").val(ui.values[0]+" - "+ui.values[1]+" ");
    }});

});
